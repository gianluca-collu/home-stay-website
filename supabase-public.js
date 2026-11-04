(function () {
    const config = window.SUPABASE_CONFIG || {};
    const client = window.supabase && config.url && config.publishableKey
        ? window.supabase.createClient(config.url, config.publishableKey)
        : null;
    const cacheKey = 'ospitalita.booking-data.v1';

    window.loadSupabaseBookingData = async function () {
        if (!client) return { configured: false };

        try {
            const [properties, dailyPrices, unavailable] = await Promise.all([
                client.from('booking_properties').select('id, base_nightly_price, minimum_stay, maximum_stay'),
                client.from('nightly_prices').select('property_id, night_date, nightly_price'),
                client.from('public_unavailable_periods').select('property_id, start_date, end_date')
            ]);
            const failed = [properties, dailyPrices, unavailable].find(result => result.error);
            if (failed) throw failed.error;

            const snapshot = {
                properties: properties.data,
                dailyPrices: dailyPrices.data,
                unavailable: unavailable.data,
                updatedAt: new Date().toISOString()
            };
            try {
                localStorage.setItem(cacheKey, JSON.stringify(snapshot));
            } catch (error) {
                console.warn('Impossibile salvare la copia locale dei dati prenotazioni:', error);
            }
            return { configured: true, stale: false, ...snapshot };
        } catch (error) {
            console.error('Lettura Supabase non riuscita:', error);
            try {
                const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
                if (cached) return { configured: true, stale: true, ...cached, error };
            } catch (cacheError) {
                console.warn('Copia locale non disponibile:', cacheError);
            }
            return { configured: true, stale: true, error };
        }
    };
})();