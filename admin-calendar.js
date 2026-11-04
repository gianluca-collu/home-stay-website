(function () {
    const config = window.SUPABASE_CONFIG || {};
    const client = window.supabase && config.url && config.publishableKey
        ? window.supabase.createClient(config.url, config.publishableKey)
        : null;

    const elements = {
        notice: document.getElementById('globalNotice'),
        loginView: document.getElementById('loginView'),
        dashboardView: document.getElementById('dashboardView'),
        loginForm: document.getElementById('loginForm'),
        logoutButton: document.getElementById('logoutButton'),
        refreshButton: document.getElementById('refreshButton'),
        propertySelect: document.getElementById('propertySelect'),
        settingsForm: document.getElementById('propertySettingsForm'),
        basePrice: document.getElementById('basePrice'),
        minimumStay: document.getElementById('minimumStay'),
        maximumStay: document.getElementById('maximumStay'),
        calendar: document.getElementById('adminCalendar'),
        calendarMonth: document.getElementById('calendarMonth'),
        previousMonth: document.getElementById('previousMonth'),
        nextMonth: document.getElementById('nextMonth'),
        selectCurrentMonth: document.getElementById('selectCurrentMonth'),
        selectionStartMonth: document.getElementById('selectionStartMonth'),
        selectionEndMonth: document.getElementById('selectionEndMonth'),
        selectMonthRange: document.getElementById('selectMonthRange'),
        clearSelection: document.getElementById('clearSelection'),
        selectionTools: document.getElementById('selectionTools'),
        selectionCount: document.getElementById('selectionCount'),
        selectedPrice: document.getElementById('selectedPrice'),
        applyPrice: document.getElementById('applyPrice'),
        resetPrice: document.getElementById('resetPrice'),
        closeDates: document.getElementById('closeDates'),
        openDates: document.getElementById('openDates'),
        bookingForm: document.getElementById('bookingForm'),
        bookingsList: document.getElementById('bookingsList')
    };

    let properties = [];
    let currentPropertyId = null;
    let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    let dailyPrices = [];
    let blocks = [];
    let bookings = [];
    let selectedDates = new Set();

    const initialMonth = `${calendarCursor.getFullYear()}-${String(calendarCursor.getMonth() + 1).padStart(2, '0')}`;
    elements.selectionStartMonth.value = initialMonth;
    elements.selectionEndMonth.value = initialMonth;

    function showNotice(message, type = 'info') {
        elements.notice.textContent = message;
        elements.notice.className = `notice ${type === 'error' ? 'error' : type === 'success' ? 'success' : ''}`;
        elements.notice.classList.remove('hidden');
    }

    function hideNotice() {
        elements.notice.classList.add('hidden');
    }

    function dateKey(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function parseDate(value) {
        const [year, month, day] = value.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    function formatDate(value) {
        return new Intl.DateTimeFormat('it-IT').format(parseDate(value));
    }

    function addDays(value, amount) {
        const date = parseDate(value);
        date.setDate(date.getDate() + amount);
        return dateKey(date);
    }

    function formatPrice(value) {
        return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
    }

    function currentProperty() {
        return properties.find(property => property.id === currentPropertyId);
    }

    function isBooked(date) {
        return bookings.some(booking =>
            booking.status === 'confirmed' &&
            date >= booking.check_in &&
            date < booking.check_out
        );
    }

    function isBlocked(date) {
        return blocks.some(block => block.blocked_date === date);
    }

    function getPrice(date) {
        const override = dailyPrices.find(price => price.night_date === date);
        return override ? override.nightly_price : currentProperty().base_nightly_price;
    }

    function updateSelectionTools() {
        const count = selectedDates.size;
        elements.selectionTools.classList.toggle('hidden', count === 0);
        elements.selectionCount.textContent = count === 1 ? '1 giorno selezionato' : `${count} giorni selezionati`;
        renderCalendar();
    }

    function toggleDate(date) {
        if (isBooked(date)) return;
        if (selectedDates.has(date)) selectedDates.delete(date);
        else selectedDates.add(date);
        updateSelectionTools();
    }

    function selectMonthRange(startValue, endValue) {
        const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;
        if (!monthPattern.test(startValue) || !monthPattern.test(endValue)) {
            showNotice('Seleziona il mese iniziale e quello finale.', 'error');
            return;
        }

        const [startYear, startMonth] = startValue.split('-').map(Number);
        const [endYear, endMonth] = endValue.split('-').map(Number);
        const start = new Date(startYear, startMonth - 1, 1);
        const end = new Date(endYear, endMonth, 0);
        if (start > end) {
            showNotice('Il mese iniziale deve precedere o coincidere con quello finale.', 'error');
            return;
        }

        const previousCount = selectedDates.size;
        let availableCount = 0;
        for (let monthDate = new Date(start); monthDate <= end; monthDate.setMonth(monthDate.getMonth() + 1)) {
            const year = monthDate.getFullYear();
            const month = monthDate.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            for (let day = 1; day <= daysInMonth; day++) {
                const key = dateKey(new Date(year, month, day));
                if (!isBooked(key)) {
                    availableCount++;
                    selectedDates.add(key);
                }
            }
        }

        const addedCount = selectedDates.size - previousCount;
        updateSelectionTools();
        if (addedCount) {
            showNotice(`Aggiunte ${addedCount} date alla selezione. Le date prenotate sono escluse.`, 'success');
        } else {
            showNotice(availableCount
                ? 'Le date disponibili di questi mesi erano gia selezionate.'
                : 'I mesi selezionati contengono solo date gia prenotate.');
        }
    }

    function renderCalendar() {
        const year = calendarCursor.getFullYear();
        const month = calendarCursor.getMonth();
        elements.calendarMonth.textContent = new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' }).format(calendarCursor);

        const weekdays = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
        const cells = weekdays.map(day => {
            const heading = document.createElement('div');
            heading.className = 'calendar-weekday';
            heading.setAttribute('role', 'columnheader');
            heading.textContent = day;
            return heading;
        });

        const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
        for (let index = 0; index < firstWeekday; index++) {
            const blank = document.createElement('div');
            blank.className = 'calendar-day outside-month';
            blank.setAttribute('aria-hidden', 'true');
            cells.push(blank);
        }

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(year, month, day);
            const key = dateKey(currentDate);
            const booked = isBooked(key);
            const blocked = isBlocked(key);
            const selected = selectedDates.has(key);
            const customPrice = dailyPrices.some(price => price.night_date === key);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `calendar-day${booked ? ' booked' : blocked ? ' blocked' : ''}${selected ? ' selected' : ''}`;
            button.setAttribute('role', 'gridcell');
            button.setAttribute('aria-pressed', String(selected));
            button.setAttribute('aria-label', `${day} ${elements.calendarMonth.textContent}, ${formatPrice(getPrice(key))} a notte, ${booked ? 'prenotato' : blocked ? 'chiuso' : 'disponibile'}${customPrice ? ', prezzo personalizzato' : ''}`);
            button.disabled = booked;

            const dayNumber = document.createElement('span');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            const price = document.createElement('span');
            price.className = 'day-price';
            price.textContent = formatPrice(getPrice(key));
            const state = document.createElement('span');
            state.className = 'day-state';
            state.textContent = booked ? 'Prenotato' : blocked ? 'Chiuso' : customPrice ? 'Personalizzato' : 'Disponibile';
            button.append(dayNumber, price, state);
            button.addEventListener('click', () => toggleDate(key));
            cells.push(button);
        }

        elements.calendar.replaceChildren(...cells);
    }

    function renderBookings() {
        const propertyBookings = bookings.filter(booking => booking.property_id === currentPropertyId);
        if (!propertyBookings.length) {
            const empty = document.createElement('p');
            empty.className = 'empty';
            empty.textContent = 'Non ci sono prenotazioni registrate per questa casa.';
            elements.bookingsList.replaceChildren(empty);
            return;
        }

        elements.bookingsList.replaceChildren(...propertyBookings.map(booking => {
            const row = document.createElement('div');
            row.className = `booking-row${booking.status === 'cancelled' ? ' booking-cancelled' : ''}`;
            const details = document.createElement('div');
            const guest = document.createElement('strong');
            guest.textContent = booking.guest_name;
            const dates = document.createElement('div');
            dates.className = 'booking-meta';
            dates.textContent = `${formatDate(booking.check_in)} - ${formatDate(booking.check_out)} · ${booking.guest_count} ospiti · ${formatPrice(booking.agreed_total)}${booking.guest_email ? ` · ${booking.guest_email}` : ''}`;
            const status = document.createElement('div');
            status.className = 'booking-meta';
            status.textContent = booking.status === 'confirmed' ? 'Confermata' : 'Annullata';
            details.append(guest, dates, status);
            row.append(details);

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'button button-small';
            button.textContent = booking.status === 'confirmed' ? 'Annulla prenotazione' : 'Ripristina';
            button.addEventListener('click', () => updateBookingStatus(booking));
            row.append(button);
            return row;
        }));
    }

    async function loadPropertyData() {
        if (!currentPropertyId) return;
        hideNotice();
        const property = currentProperty();
        if (!property) return;

        elements.basePrice.value = property.base_nightly_price;
        elements.minimumStay.value = property.minimum_stay;
        elements.maximumStay.value = property.maximum_stay ?? '';

        const [pricesResult, blocksResult, bookingsResult] = await Promise.all([
            client.from('nightly_prices').select('night_date, nightly_price').eq('property_id', currentPropertyId).order('night_date'),
            client.from('calendar_blocks').select('blocked_date, note').eq('property_id', currentPropertyId).order('blocked_date'),
            client.from('bookings').select('id, property_id, guest_name, guest_email, guest_phone, guest_count, check_in, check_out, agreed_total, status').eq('property_id', currentPropertyId).order('check_in')
        ]);
        const failed = [pricesResult, blocksResult, bookingsResult].find(result => result.error);
        if (failed) throw failed.error;

        dailyPrices = pricesResult.data;
        blocks = blocksResult.data;
        bookings = bookingsResult.data;
        renderCalendar();
        renderBookings();
    }

    async function refreshPropertyData(successMessage) {
        try {
            await loadPropertyData();
            if (successMessage) showNotice(successMessage, 'success');
        } catch (error) {
            showNotice(error.message || 'Impossibile caricare i dati.', 'error');
        }
    }

    async function authorizeSession() {
        const { data: isAdmin, error } = await client.rpc('is_site_admin');
        if (error) throw error;
        if (!isAdmin) {
            await client.auth.signOut();
            throw new Error('Questo account non ha i permessi di amministratore.');
        }

        const { data, error: propertyError } = await client
            .from('booking_properties')
            .select('id, title, base_nightly_price, minimum_stay, maximum_stay')
            .order('title');
        if (propertyError) throw propertyError;
        if (!data.length) throw new Error('Non sono state configurate proprieta.');

        properties = data;
        elements.propertySelect.replaceChildren(...properties.map(property => {
            const option = document.createElement('option');
            option.value = property.id;
            option.textContent = property.title;
            return option;
        }));
        currentPropertyId = properties[0].id;
        elements.loginView.classList.add('hidden');
        elements.dashboardView.classList.remove('hidden');
        elements.logoutButton.classList.remove('hidden');
        elements.refreshButton.classList.remove('hidden');
        await loadPropertyData();
    }

    async function saveSelectedPrices() {
        const priceValue = elements.selectedPrice.value;
        if (!priceValue || Number(priceValue) < 0 || !selectedDates.size) {
            showNotice('Seleziona almeno un giorno e inserisci un prezzo valido.', 'error');
            return;
        }
        const price = Number(priceValue);
        const dates = [...selectedDates];
        const basePrice = currentProperty().base_nightly_price;
        let error;

        if (price === basePrice) {
            const result = await client.from('nightly_prices').delete().eq('property_id', currentPropertyId).in('night_date', dates);
            error = result.error;
        } else {
            const rows = dates.map(night_date => ({ property_id: currentPropertyId, night_date, nightly_price: price }));
            const result = await client.from('nightly_prices').upsert(rows, { onConflict: 'property_id,night_date' });
            error = result.error;
        }

        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        selectedDates.clear();
        elements.selectedPrice.value = '';
        updateSelectionTools();
        await refreshPropertyData('Prezzi aggiornati.');
    }

    async function resetSelectedPrices() {
        if (!selectedDates.size) return;
        const { error } = await client.from('nightly_prices')
            .delete()
            .eq('property_id', currentPropertyId)
            .in('night_date', [...selectedDates]);
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        selectedDates.clear();
        updateSelectionTools();
        await refreshPropertyData('Ripristinato il prezzo base per i giorni selezionati.');
    }

    async function setSelectedDatesBlocked(blocked) {
        if (!selectedDates.size) return;
        const dates = [...selectedDates];
    let error;
        if (blocked) {
            const rows = dates.map(blocked_date => ({ property_id: currentPropertyId, blocked_date, note: 'Chiusura manuale' }));
            const result = await client.from('calendar_blocks').upsert(rows, { onConflict: 'property_id,blocked_date' });
            error = result.error;
        } else {
            const result = await client.from('calendar_blocks')
                .delete()
                .eq('property_id', currentPropertyId)
                .in('blocked_date', dates);
            error = result.error;
        }
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        selectedDates.clear();
        updateSelectionTools();
        await refreshPropertyData(blocked ? 'Date chiuse.' : 'Date nuovamente disponibili.');
    }

    async function updateBookingStatus(booking) {
        const nextStatus = booking.status === 'confirmed' ? 'cancelled' : 'confirmed';
        const confirmation = nextStatus === 'cancelled'
            ? `Annullare il soggiorno di ${booking.guest_name}? Le date torneranno disponibili.`
            : `Ripristinare la prenotazione di ${booking.guest_name}?`;
        if (!window.confirm(confirmation)) return;
        const { error } = await client.from('bookings').update({ status: nextStatus }).eq('id', booking.id);
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        await refreshPropertyData(nextStatus === 'cancelled' ? 'Prenotazione annullata.' : 'Prenotazione ripristinata.');
    }

    if (!client) {
        showNotice('Configura URL e chiave pubblicabile in supabase-config.js e applica supabase-schema.sql al progetto.', 'error');
        elements.loginForm.querySelector('button').disabled = true;
        return;
    }

    elements.loginForm.addEventListener('submit', async event => {
        event.preventDefault();
        hideNotice();
        const formData = new FormData(elements.loginForm);
        const { error } = await client.auth.signInWithPassword({
            email: formData.get('email'),
            password: formData.get('password')
        });
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        try {
            await authorizeSession();
        } catch (authError) {
            showNotice(authError.message || 'Accesso non riuscito.', 'error');
        }
    });

    elements.logoutButton.addEventListener('click', async () => {
        await client.auth.signOut();
        window.location.reload();
    });
    elements.refreshButton.addEventListener('click', () => refreshPropertyData());
    elements.propertySelect.addEventListener('change', () => {
        currentPropertyId = elements.propertySelect.value;
        selectedDates.clear();
        updateSelectionTools();
        refreshPropertyData();
    });
    elements.previousMonth.addEventListener('click', () => {
        calendarCursor.setMonth(calendarCursor.getMonth() - 1);
        renderCalendar();
    });
    elements.nextMonth.addEventListener('click', () => {
        calendarCursor.setMonth(calendarCursor.getMonth() + 1);
        renderCalendar();
    });
    elements.selectCurrentMonth.addEventListener('click', () => {
        const month = `${calendarCursor.getFullYear()}-${String(calendarCursor.getMonth() + 1).padStart(2, '0')}`;
        elements.selectionStartMonth.value = month;
        elements.selectionEndMonth.value = month;
        selectMonthRange(month, month);
    });
    elements.selectMonthRange.addEventListener('click', () => {
        selectMonthRange(elements.selectionStartMonth.value, elements.selectionEndMonth.value);
    });
    elements.clearSelection.addEventListener('click', () => {
        selectedDates.clear();
        updateSelectionTools();
    });
    elements.applyPrice.addEventListener('click', () => saveSelectedPrices().catch(error => showNotice(error.message, 'error')));
    elements.resetPrice.addEventListener('click', () => resetSelectedPrices().catch(error => showNotice(error.message, 'error')));
    elements.closeDates.addEventListener('click', () => setSelectedDatesBlocked(true).catch(error => showNotice(error.message, 'error')));
    elements.openDates.addEventListener('click', () => setSelectedDatesBlocked(false).catch(error => showNotice(error.message, 'error')));

    elements.settingsForm.addEventListener('submit', async event => {
        event.preventDefault();
        const basePrice = Number(elements.basePrice.value);
        const minimumStay = Number(elements.minimumStay.value);
        const maximumStay = elements.maximumStay.value === '' ? null : Number(elements.maximumStay.value);
        if (maximumStay !== null && maximumStay < minimumStay) {
            showNotice('Il soggiorno massimo non puo essere inferiore al minimo.', 'error');
            return;
        }
        const { error } = await client.from('booking_properties').update({
            base_nightly_price: basePrice,
            minimum_stay: minimumStay,
            maximum_stay: maximumStay
        }).eq('id', currentPropertyId);
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        properties = properties.map(property => property.id === currentPropertyId
            ? { ...property, base_nightly_price: basePrice, minimum_stay: minimumStay, maximum_stay: maximumStay }
            : property);
        await refreshPropertyData('Impostazioni salvate.');
    });

    elements.bookingForm.addEventListener('submit', async event => {
        event.preventDefault();
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;
        const nights = (parseDate(checkOut) - parseDate(checkIn)) / 86400000;
        const property = currentProperty();
        if (nights <= 0 || nights < property.minimum_stay || (property.maximum_stay !== null && nights > property.maximum_stay)) {
            showNotice('Controlla le date: il soggiorno non rispetta la durata minima o massima.', 'error');
            return;
        }
        const record = {
            property_id: currentPropertyId,
            guest_name: document.getElementById('guestName').value.trim(),
            guest_email: document.getElementById('guestEmail').value.trim(),
            guest_phone: document.getElementById('guestPhone').value.trim(),
            guest_count: Number(document.getElementById('guestCount').value),
            check_in: checkIn,
            check_out: checkOut,
            agreed_total: Number(document.getElementById('agreedTotal').value),
            status: 'confirmed'
        };
        const { error } = await client.from('bookings').insert(record);
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        elements.bookingForm.reset();
        await refreshPropertyData('Prenotazione registrata e date bloccate.');
    });

    client.auth.getSession().then(({ data, error }) => {
        if (error) {
            showNotice(error.message, 'error');
            return;
        }
        if (data.session) authorizeSession().catch(authError => showNotice(authError.message || 'Accesso non riuscito.', 'error'));
    });
})();
