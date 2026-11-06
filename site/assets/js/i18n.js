(function () {
    const localeCodes = { it: 'it-IT', en: 'en-GB', fr: 'fr-FR', de: 'de-DE' };
    const preferenceKey = 'sa-ruxi-language';
    const translations = {
        it: {
            ui: {
                language: 'Lingua', resultOne: '{count} alloggio', results: '{count} alloggi', filters: 'Filtri', zone: 'Zona', guests: 'Ospiti', price: 'Prezzo a notte', bedrooms: 'Camere', search: 'Cerca', reset: 'Reset',
                allAreas: 'Tutte le zone', anyGuests: 'Qualsiasi numero', anyBedrooms: 'Qualsiasi numero', threeBedrooms: '3 camere', fourBedrooms: '4+ camere',
                close: 'Chiudi', openFullPhoto: 'Apri la foto a schermo intero', namePlaceholder: 'Es. Marco Rossi', guestsPlaceholder: 'Es. 4',
                cardBedroom: '{count} camera', cardBedrooms: '{count} camere', cardGuest: '{count} ospite', cardGuests: '{count} ospiti', cardBathroom: '{count} bagno', cardBathrooms: '{count} bagni', photoNumber: 'Foto {number}', rightsReserved: 'Tutti i diritti riservati.',
                weekdays: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
                noProperties: 'Nessun alloggio trovato', noPropertiesHelp: 'Prova a modificare i filtri.', loadError: 'Alloggi momentaneamente non disponibili', loadErrorHelp: 'Riprova tra poco o contattaci per informazioni.',
                details: 'Scopri i dettagli', description: 'Descrizione', readMore: 'Leggi tutto', showLess: 'Mostra meno', locationInfo: 'Informazioni sulla posizione', map: 'Localizzazione', availability: 'Disponibilità',
                minStay: 'Soggiorno minimo:', nights: 'notti', nightUnit: 'notte', available: 'Disponibile', unavailable: 'Non disponibile', occupied: 'Occupato', pricePerNight: 'Prezzo per notte', bookNow: 'Invia richiesta',
                bookingTitle: 'Richiesta di soggiorno', guestName: 'Nome e cognome *', email: 'Email *', phone: 'Telefono *', arrival: 'Data di arrivo *', departure: 'Data di partenza *', guestCount: 'Numero di ospiti *', message: 'Messaggio (facoltativo)',
                messagePlaceholder: 'Scrivi un messaggio per l’host...', noSensitive: 'Non inserire dati sanitari o altre informazioni sensibili nel messaggio.', summary: 'Riepilogo richiesta', property: 'Alloggio:', checkIn: 'Arrivo:', checkOut: 'Partenza:', totalNights: 'Notti:', averageNight: 'Prezzo medio per notte:', total: 'Totale:',
                readPrivacy: 'Dichiaro di aver letto l’', privacy: 'informativa privacy', sendRequest: 'Invia richiesta', sending: 'Invio in corso...',
                emailUnavailable: 'Il servizio di invio non è disponibile. Riprova più tardi o contattaci via email.', propertyUnavailable: 'Alloggio non trovato.', requiredFields: 'Compila tutti i campi obbligatori.', invalidDates: 'La data di partenza deve essere successiva alla data di arrivo.',
                minStayError: 'Il soggiorno minimo è di {count} notti.', maxStayError: 'Il soggiorno massimo è di {count} notti.', requestSent: 'Richiesta inviata. Ti risponderemo a {email}. Il soggiorno non è confermato finché non ricevi una conferma.', requestError: 'Invio non riuscito. Riprova più tardi o contattaci a {email}.',
                calendarUnavailable: 'Connessione al calendario non disponibile. L’ultima copia salvata è del {date}; verifica la disponibilità prima di confermare.', calendarUnavailableNoCache: 'Connessione al calendario non disponibile. Le date mostrate potrebbero non essere aggiornate: verifica manualmente la disponibilità.', calendarUpdated: 'Disponibilità e tariffe aggiornate: {date}.',
                photoViewer: 'Visualizzatore foto', closePhoto: 'Chiudi foto', previousPhoto: 'Foto precedente', nextPhoto: 'Foto successiva', privacyFooter: 'Informativa privacy', backToSite: 'Torna al sito',
                or: 'o', referenceLinks: 'Approfondisci:', emailjsPolicy: 'privacy policy di EmailJS', emailjsDpa: 'accordo sul trattamento', googlePolicy: 'privacy policy di Google', supabasePolicy: 'privacy policy', supabaseDpa: 'accordo sul trattamento'
            },
                content: {},
                properties: {},
                privacy: {}
        },
        en: {
            ui: {
                language: 'Language', resultOne: '{count} stay', results: '{count} stays', filters: 'Filters', zone: 'Area', guests: 'Guests', price: 'Price per night', bedrooms: 'Bedrooms', search: 'Search', reset: 'Reset',
                allAreas: 'All areas', anyGuests: 'Any number', anyBedrooms: 'Any number', threeBedrooms: '3 bedrooms', fourBedrooms: '4+ bedrooms',
                close: 'Close', openFullPhoto: 'Open photo fullscreen', namePlaceholder: 'e.g. Alex Smith', guestsPlaceholder: 'e.g. 4',
                cardBedroom: '{count} bedroom', cardBedrooms: '{count} bedrooms', cardGuest: '{count} guest', cardGuests: '{count} guests', cardBathroom: '{count} bathroom', cardBathrooms: '{count} bathrooms', photoNumber: 'Photo {number}', rightsReserved: 'All rights reserved.',
                weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                noProperties: 'No stays found', noPropertiesHelp: 'Try changing the filters.', loadError: 'Stays are temporarily unavailable', loadErrorHelp: 'Please try again shortly or contact us.',
                details: 'View details', description: 'Description', readMore: 'Read more', showLess: 'Show less', locationInfo: 'About the location', map: 'Location', availability: 'Availability',
                minStay: 'Minimum stay:', nights: 'nights', nightUnit: 'night', available: 'Available', unavailable: 'Unavailable', occupied: 'Booked', pricePerNight: 'Price per night', bookNow: 'Send a request',
                bookingTitle: 'Stay request', guestName: 'Full name *', email: 'Email *', phone: 'Phone *', arrival: 'Check-in *', departure: 'Check-out *', guestCount: 'Number of guests *', message: 'Message (optional)',
                messagePlaceholder: 'Write a message for the host...', noSensitive: 'Do not include health or other sensitive information in your message.', summary: 'Request summary', property: 'Stay:', checkIn: 'Check-in:', checkOut: 'Check-out:', totalNights: 'Nights:', averageNight: 'Average price per night:', total: 'Total:',
                readPrivacy: 'I confirm that I have read the ', privacy: 'privacy notice', sendRequest: 'Send request', sending: 'Sending...',
                emailUnavailable: 'The sending service is unavailable. Please try again later or contact us by email.', propertyUnavailable: 'Stay not found.', requiredFields: 'Please complete all required fields.', invalidDates: 'Check-out must be after check-in.',
                minStayError: 'The minimum stay is {count} nights.', maxStayError: 'The maximum stay is {count} nights.', requestSent: 'Request sent. We will reply to {email}. Your stay is not confirmed until you receive a confirmation.', requestError: 'The request could not be sent. Please try again later or contact us at {email}.',
                calendarUnavailable: 'Calendar connection unavailable. The last saved copy is from {date}; please verify availability before confirming.', calendarUnavailableNoCache: 'Calendar connection unavailable. The dates shown may be out of date; please check availability manually.', calendarUpdated: 'Availability and rates updated: {date}.',
                photoViewer: 'Photo viewer', closePhoto: 'Close photo', previousPhoto: 'Previous photo', nextPhoto: 'Next photo', privacyFooter: 'Privacy notice', backToSite: 'Back to the website',
                emailjsPolicy: 'EmailJS privacy policy', emailjsDpa: 'data processing agreement', googlePolicy: 'Google privacy policy', supabasePolicy: 'privacy policy', supabaseDpa: 'data processing agreement'
            },
            content: {
                pageTitle: 'Sa Ruxi Stay | Stays between town and sea',
                header: { navigation: ['Home', 'Stays', 'Area', 'About', 'Contact'] },
                hero: { title: 'Find your ideal stay', subtitle: 'Discover the landscapes, beaches and local life of southern Sardinia.', buttonText: 'Explore the stays' },
                casesSection: { title: 'Stays', subtitle: 'Thoughtfully selected places for a comfortable Sardinian getaway.' },
                territory: {
                    title: 'Southern Sardinia, between Cagliari and Villasimius',
                    description: '',
                    mainTitle: 'Sea views and memorable sunsets',
                    mainDescription: 'Explore the coast, historic Cagliari, local food and the beaches around Villasimius, at your own pace.',
                    highlights: [
                        { title: 'By the sea', description: 'Discover the bays and coastline of southern Sardinia.' },
                        { title: 'Cagliari', description: 'Explore the old town, the harbour and local restaurants.' },
                        { title: 'Villasimius beaches', description: 'Find coves and beaches along the coast.' },
                        { title: 'Local food', description: 'Taste traditional Sardinian dishes and local wines.' }
                    ],
                    regions: [{ name: 'Southern Sardinia', description: 'Beaches, coves and coastal towns between Cagliari and Villasimius.', highlights: ['Cagliari', 'Villasimius', 'Torre delle Stelle'] }]
                },
                about: {
                    title: 'About me', subtitle: 'A project by Gianluca Collu', mainTitle: 'A thoughtful way to stay',
                    paragraphs: [
                        'Sardinia is a distinctive island, shaped by striking landscapes, deep-rooted traditions and a slower pace of life.',
                        'This project grew from that connection: welcoming stays, thoughtful hospitality and respect for the places and their rhythms.',
                        'I help guests discover more than the beaches, sharing local landscapes, traditions and food, along with places I know well.',
                        'A stay should be a chance to slow down, leave daily routines behind and enjoy your own time without a fixed agenda.',
                        'True comfort is not only where you stay, but feeling at home.'
                    ],
                    closing: 'Welcome to Sardinia.'
                },
                contact: { title: 'Get in touch', description: 'For information about the stays, availability and rates, contact me by phone or email.', methods: ['Phone', 'Email'], buttonText: 'Explore the stays' },
                filters: {
                    title: 'Find your stay',
                    locations: [{ label: 'All areas', value: '' }, { label: 'Southern Sardinia', value: 'Sud Sardegna' }, { label: 'Villasimius', value: 'Villasimius' }],
                    guests: [{ label: 'Any number', value: '' }, { label: '2 guests', value: '2' }, { label: '4 guests', value: '4' }, { label: '6 guests', value: '6' }, { label: '8+ guests', value: '8' }],
                    priceRange: { label: 'Price per night' }
                },
                footer: { tagline: 'A project by Gianluca Collu' }
            },
            properties: {
                'Villa Karla': {
                    badge: 'Sea-view villa', summary: 'A three-level villa in Porto Sa Ruxi, with a sea-view veranda and private garden. The beach is a short walk away.',
                    description: 'A three-level villa in the hills of Porto Sa Ruxi, about 6 km from Villasimius, in a quiet residential area overlooking white-sand beaches and granite rocks. It sleeps up to five guests in three bedrooms with four beds. Upstairs are two bedrooms with ceiling fans and air conditioning, plus a bathroom with a shower. The lower-level bedroom has a ceiling fan and a second bathroom without a shower. The home also has a covered, breezy veranda with sea views, a fenced private garden with an outdoor dining area, a charcoal barbecue and an outdoor shower. Porto Sa Ruxi beach is a few minutes away on foot via an underpass. A car is needed to reach other beaches, shops and restaurants. Because of the stairs, the home is not recommended for children under three or guests with mobility difficulties. The residence also has a tennis court available for a small fee.',
                    location: 'Porto Sa Ruxi', region: 'Villasimius', locationInfo: 'Porto Sa Ruxi is a coastal area in the Villasimius marine protected area, with white-sand beaches, granite rocks and clear-water coves. The nearest beach is a short walk via an underpass; a car is needed for other beaches and services.',
                    features: [
                        ['Bay views', 'Sea view'], ['Beach access', 'A few minutes on foot'], ['Kitchen', 'Available'], ['Wi-Fi', 'Available'], ['Private garden', 'Fenced'], ['Outdoor shower', 'Available'], ['Veranda', 'Covered and breezy'], ['Barbecue', 'Charcoal'], ['Tennis court', 'Available for a small fee']
                    ]
                },
                Cagliari: {
                    badge: 'Sea view', summary: 'A penthouse in Cagliari’s Fiera district, with a private sea-view terrace. The city centre and Poetto beach are easy to reach.',
                    description: 'A 40 m² penthouse on the fifth floor of a residential building in Cagliari’s Fiera district. It sleeps up to four guests and has a bright bedroom with a bed, desk, TV and wardrobe, plus a living room with large sea-view windows, a kitchenette and a sofa bed for two. There is a bathroom with a shower, a kitchen, washing machine, Wi-Fi, workspace and a large private panoramic terrace with outdoor dining space. The lift reaches the fourth floor; one final flight of stairs leads to the penthouse. Check-in is from 14:00 to 19:00 using a key safe, and check-out is by 10:00.',
                    location: 'Cagliari', region: 'Southern Sardinia', locationInfo: 'The penthouse is in the quiet residential Fiera district. The fairgrounds are about 50 m away, the stadium 1.2 km, and the city centre about 2.3 km. Poetto beach is reachable by buses PF and PQ, which stop nearby. CRAI is about 300 m away and Conad City 500 m away, with other small shops, greengrocers, delis and butchers nearby. A municipal tourist tax of €1.50 per person per night is payable at check-in.',
                    features: [
                        ['Private terrace', 'Sea view and dining area'], ['Kitchen', 'Kitchenette'], ['Wi-Fi', 'Available'], ['Parking', 'Free on site'], ['Workspace', 'Desk in bedroom'], ['Washing machine', 'Available'], ['TV', 'In bedroom'], ['Self check-in', 'Key safe']
                    ]
                }
            },
            privacy: {
                title: 'Privacy notice', intro: 'This notice describes how Sa Ruxi Stay processes personal data under the EU General Data Protection Regulation (GDPR).',
                controllerTitle: 'Data controller', controllerLead: 'The data controller is Gianluca Collu. For privacy requests, contact:', phone: 'call +39 339 882 5146',
                dataTitle: 'Data and purposes', data1: 'When you send a stay request, the form processes your name, email, phone number, requested dates, number of guests, selected property and, if provided, your message. The phone number is required so we can contact you; the message is optional. Please do not include health or other sensitive information.',
                data2: 'The data is used to reply to your request and check availability and rates, and, if requested, to take steps before entering into a contract. The legal basis is taking steps at your request before entering into a contract (GDPR Article 6(1)(b)). If a booking is confirmed, some data may be processed to meet legal obligations and establish or defend legal claims.',
                data3: 'All requests are sent to Gianluca Collu through EmailJS and delivered to the email address above. For properties managed by others, Gianluca Collu forwards the information needed to check availability and reply to the relevant owner or manager. That person then processes the data for their own purposes and under their own privacy notice. Sending a request does not automatically confirm a booking.',
                providersTitle: 'Where data is processed',
                emailjs: 'EmailJS transmits requests. According to its privacy notice, its main servers are in the United States and it uses standard contractual clauses for transfers from Europe. EmailJS may store request metadata and activity; email activity logging can be disabled in its settings.',
                gmail: 'Google/Gmail hosts the inbox receiving requests. Messages remain in the mailbox until the controller deletes them, subject to the service settings.',
                supabase: 'Supabase provides public price and availability data. Personal data for a confirmed booking is entered manually in the admin area. The project’s primary database is hosted in West EU (Ireland, eu-west-1). This does not mean every technical service or subprocessor operates only in the EU.',
                technical: 'The site loads technical resources from Google Fonts, Google Maps, jsDelivr, cdnjs/Cloudflare and images from Unsplash. When requested, these providers may receive technical data such as IP address, browser and request time. The site hosting provider depends on the service used to publish it.',
                providersNote: 'Actual hosting, Supabase region, Gmail and EmailJS settings determine technical retention and any international transfers; these account settings should be checked.',
                retentionTitle: 'Retention', retention: 'Unconfirmed requests are kept in the mailbox for no more than 12 months after the last contact, then deleted, unless needed for a dispute or legal obligation. Confirmed booking data is kept for managing the stay and afterward only as long as required by applicable tax and accounting obligations or to protect legal claims. Copies and technical logs held by providers follow their settings and policies.',
                cookiesTitle: 'Technical data and cookies', cookies: 'The site does not integrate analytics, advertising profiling or marketing pixels. It uses browser local storage for a technical copy of prices and availability, without names, email addresses or phone numbers. External libraries, maps and images may still receive connection data. If non-essential cookies or tracking tools are added later, consent must be requested before they are activated.',
                provisionTitle: 'Providing data', provision: 'Name, email, phone, dates and number of guests are needed to handle the request; without them the form cannot be sent. The message is optional. No payment data is collected through this form, and data is not used for marketing communications.',
                rightsTitle: 'Your rights', rights: 'You may request access, correction, erasure, restriction or portability of your data, or object to processing based on legitimate interests, by writing to the email address above. You may also lodge a complaint with the Italian Data Protection Authority. Rights may be subject to legal exceptions, such as data that must be retained for tax obligations or to defend a legal claim.',
                noDecisions: 'No automated decisions or profiling are carried out in relation to stay requests.', back: 'Back to the website', updated: 'Last updated: 5 November 2026'
            }
        },
        fr: {
            ui: {
                language: 'Langue', resultOne: '{count} hébergement', results: '{count} hébergements', filters: 'Filtres', zone: 'Zone', guests: 'Voyageurs', price: 'Prix par nuit', bedrooms: 'Chambres', search: 'Rechercher', reset: 'Réinitialiser',
                allAreas: 'Toutes les zones', anyGuests: 'Tous les nombres', anyBedrooms: 'Toutes', threeBedrooms: '3 chambres', fourBedrooms: '4 chambres et plus',
                close: 'Fermer', openFullPhoto: 'Ouvrir la photo en plein écran', namePlaceholder: 'Ex. Marie Dupont', guestsPlaceholder: 'Ex. 4',
                cardBedroom: '{count} chambre', cardBedrooms: '{count} chambres', cardGuest: '{count} voyageur', cardGuests: '{count} voyageurs', cardBathroom: '{count} salle de bain', cardBathrooms: '{count} salles de bain', photoNumber: 'Photo {number}', rightsReserved: 'Tous droits réservés.',
                weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                noProperties: 'Aucun hébergement trouvé', noPropertiesHelp: 'Essayez de modifier les filtres.', loadError: 'Hébergements temporairement indisponibles', loadErrorHelp: 'Réessayez plus tard ou contactez-nous.',
                details: 'Voir les détails', description: 'Description', readMore: 'Lire la suite', showLess: 'Réduire', locationInfo: 'À propos du lieu', map: 'Localisation', availability: 'Disponibilités',
                minStay: 'Séjour minimum :', nights: 'nuits', nightUnit: 'nuit', available: 'Disponible', unavailable: 'Indisponible', occupied: 'Réservé', pricePerNight: 'Prix par nuit', bookNow: 'Envoyer une demande',
                bookingTitle: 'Demande de séjour', guestName: 'Nom et prénom *', email: 'E-mail *', phone: 'Téléphone *', arrival: 'Arrivée *', departure: 'Départ *', guestCount: 'Nombre de voyageurs *', message: 'Message (facultatif)',
                messagePlaceholder: 'Écrivez un message à l’hôte...', noSensitive: 'N’indiquez pas de données de santé ni d’autres informations sensibles.', summary: 'Récapitulatif de la demande', property: 'Hébergement :', checkIn: 'Arrivée :', checkOut: 'Départ :', totalNights: 'Nuits :', averageNight: 'Prix moyen par nuit :', total: 'Total :',
                readPrivacy: 'Je confirme avoir lu l’', privacy: 'notice de confidentialité', sendRequest: 'Envoyer la demande', sending: 'Envoi en cours…',
                emailUnavailable: 'Le service d’envoi est indisponible. Réessayez plus tard ou contactez-nous par e-mail.', propertyUnavailable: 'Hébergement introuvable.', requiredFields: 'Veuillez remplir tous les champs obligatoires.', invalidDates: 'La date de départ doit être postérieure à la date d’arrivée.',
                minStayError: 'Le séjour minimum est de {count} nuits.', maxStayError: 'Le séjour maximum est de {count} nuits.', requestSent: 'Demande envoyée. Nous vous répondrons à {email}. Le séjour n’est pas confirmé tant que vous n’avez pas reçu une confirmation.', requestError: 'La demande n’a pas pu être envoyée. Réessayez plus tard ou contactez-nous à {email}.',
                calendarUnavailable: 'Calendrier indisponible. La dernière copie enregistrée date du {date} ; vérifiez les disponibilités avant de confirmer.', calendarUnavailableNoCache: 'Calendrier indisponible. Les dates affichées peuvent ne pas être à jour ; vérifiez les disponibilités manuellement.', calendarUpdated: 'Disponibilités et tarifs mis à jour : {date}.',
                photoViewer: 'Visionneuse photo', closePhoto: 'Fermer la photo', previousPhoto: 'Photo précédente', nextPhoto: 'Photo suivante', privacyFooter: 'Notice de confidentialité', backToSite: 'Retour au site',
                or: 'ou', referenceLinks: 'En savoir plus :', emailjsPolicy: 'politique de confidentialité d’EmailJS', emailjsDpa: 'accord de traitement', googlePolicy: 'politique de confidentialité de Google', supabasePolicy: 'politique de confidentialité', supabaseDpa: 'accord de traitement'
            },
            content: {
                pageTitle: 'Sa Ruxi Stay | Séjours entre ville et mer',
                header: { navigation: ['Accueil', 'Séjours', 'Région', 'À propos', 'Contact'] },
                hero: { title: 'Trouvez le séjour qui vous ressemble', subtitle: 'Découvrez les paysages, les plages et la vie locale du sud de la Sardaigne.', buttonText: 'Découvrir les hébergements' },
                casesSection: { title: 'Séjours', subtitle: 'Des lieux choisis avec soin pour profiter pleinement de la Sardaigne.' },
                territory: {
                    title: 'Le sud de la Sardaigne, entre Cagliari et Villasimius', description: '', mainTitle: 'Vue mer et couchers de soleil', mainDescription: 'Découvrez le littoral, le centre historique de Cagliari, la cuisine locale et les plages de Villasimius, à votre rythme.',
                    highlights: [{ title: 'Près de la mer', description: 'Explorez les criques et le littoral du sud de la Sardaigne.' }, { title: 'Cagliari', description: 'Visitez le centre historique, le port et les restaurants locaux.' }, { title: 'Plages de Villasimius', description: 'Découvrez les criques et les plages du littoral.' }, { title: 'Saveurs locales', description: 'Goûtez aux spécialités sardes et aux vins de la région.' }],
                    regions: [{ name: 'Sud de la Sardaigne', description: 'Plages, criques et villages côtiers entre Cagliari et Villasimius.', highlights: ['Cagliari', 'Villasimius', 'Torre delle Stelle'] }]
                },
                about: { title: 'À propos', subtitle: 'Un projet de Gianluca Collu', mainTitle: 'Un accueil attentionné', paragraphs: ['La Sardaigne est une île singulière, façonnée par des paysages saisissants, des traditions profondes et un rythme de vie plus doux.', 'Ce projet est né de ce lien : proposer des hébergements accueillants, un service attentionné et le respect des lieux et de leur rythme.', 'J’aide les voyageurs à découvrir l’île au-delà des plages, en partageant ses paysages, ses traditions, sa cuisine et les adresses que je connais.', 'Un séjour est l’occasion de ralentir, de laisser le quotidien de côté et de profiter de son temps, sans programme imposé.', 'Le vrai confort ne tient pas seulement au lieu, mais au sentiment d’être chez soi.'], closing: 'Bienvenue en Sardaigne.' },
                contact: { title: 'Contactez-moi', description: 'Pour en savoir plus sur les hébergements, les disponibilités et les tarifs, contactez-moi par téléphone ou e-mail.', methods: ['Téléphone', 'E-mail'], buttonText: 'Découvrir les hébergements' },
                filters: { title: 'Trouvez votre séjour', locations: [{ label: 'Toutes les zones', value: '' }, { label: 'Sud de la Sardaigne', value: 'Sud Sardegna' }, { label: 'Villasimius', value: 'Villasimius' }], guests: [{ label: 'Tous les nombres', value: '' }, { label: '2 voyageurs', value: '2' }, { label: '4 voyageurs', value: '4' }, { label: '6 voyageurs', value: '6' }, { label: '8 voyageurs et plus', value: '8' }], priceRange: { label: 'Prix par nuit' } },
                footer: { tagline: 'Un projet de Gianluca Collu' }
            },
            properties: {
                'Villa Karla': { badge: 'Villa avec vue mer', summary: 'Villa sur trois niveaux à Porto Sa Ruxi, avec veranda vue mer et jardin privé. La plage est accessible à pied en quelques minutes.', description: 'Villa sur trois niveaux dans les collines de Porto Sa Ruxi, à environ 6 km de Villasimius, dans une résidence calme face aux plages de sable blanc et aux rochers de granit. Elle peut accueillir jusqu’à cinq personnes dans trois chambres avec quatre lits. À l’étage se trouvent deux chambres avec ventilateurs de plafond et climatisation, ainsi qu’une salle de bains avec douche. La chambre du niveau inférieur dispose d’un ventilateur de plafond et d’une seconde salle de bains sans douche. La maison comprend également une véranda couverte et ventilée avec vue mer, un jardin privé clôturé avec coin repas, un barbecue au charbon de bois et une douche extérieure. La plage de Porto Sa Ruxi est accessible à pied en quelques minutes par un passage souterrain. Une voiture est nécessaire pour rejoindre les autres plages, les commerces et les restaurants. En raison des escaliers, le logement n’est pas recommandé aux enfants de moins de trois ans ni aux personnes ayant des difficultés à se déplacer. La résidence dispose aussi d’un court de tennis accessible moyennant une petite participation.', location: 'Porto Sa Ruxi', region: 'Villasimius', locationInfo: 'Porto Sa Ruxi est une localité côtière située dans l’aire marine protégée de Villasimius, avec des plages de sable blanc, des rochers de granit et des criques aux eaux limpides. La plage la plus proche est accessible à pied par un passage souterrain ; une voiture est nécessaire pour les autres plages et services.', features: [['Vue sur la baie', 'Vue mer'], ['Accès à la plage', 'Quelques minutes à pied'], ['Cuisine', 'Disponible'], ['Wi-Fi', 'Disponible'], ['Jardin privé', 'Clôturé'], ['Douche extérieure', 'Disponible'], ['Véranda', 'Couverte et ventilée'], ['Barbecue', 'Au charbon de bois'], ['Court de tennis', 'Petite participation']] },
                Cagliari: { badge: 'Vue mer', summary: 'Attique dans le quartier Fiera de Cagliari, avec terrasse privée vue mer. Le centre-ville et la plage du Poetto sont facilement accessibles.', description: 'Attique de 40 m² au cinquième étage d’un immeuble résidentiel dans le quartier Fiera de Cagliari. Il peut accueillir jusqu’à quatre personnes : une chambre lumineuse avec lit, bureau, télévision et armoire, ainsi qu’un séjour avec grandes baies vitrées vue mer, kitchenette et canapé-lit pour deux. Le logement comprend une salle de bains avec douche, une kitchenette, un lave-linge, le Wi-Fi, un espace de travail et une grande terrasse panoramique privée avec coin repas. L’ascenseur monte jusqu’au quatrième étage ; il faut ensuite emprunter un dernier escalier. L’arrivée se fait entre 14 h et 19 h avec une boîte à clés, et le départ avant 10 h.', location: 'Cagliari', region: 'Sud de la Sardaigne', locationInfo: 'L’attique se trouve dans le quartier résidentiel calme de la Fiera. Le parc des expositions est à environ 50 m, le stade à 1,2 km et le centre-ville à environ 2,3 km. La plage du Poetto est accessible avec les bus PF et PQ, qui s’arrêtent à proximité. Le supermarché CRAI est à environ 300 m et Conad City à 500 m ; d’autres petites épiceries, primeurs, traiteurs et boucheries se trouvent à proximité. La taxe de séjour municipale indiquée est de 1,50 € par personne et par nuit, payable à l’arrivée.', features: [['Terrasse privée', 'Vue mer et coin repas'], ['Cuisine', 'Kitchenette'], ['Wi-Fi', 'Disponible'], ['Parking', 'Gratuit sur place'], ['Espace de travail', 'Bureau dans la chambre'], ['Lave-linge', 'Disponible'], ['Télévision', 'Dans la chambre'], ['Arrivée autonome', 'Boîte à clés']] }
            },
            privacy: {
                title: 'Notice de confidentialité', intro: 'Cette notice explique comment Sa Ruxi Stay traite les données personnelles conformément au règlement général sur la protection des données (RGPD).',
                controllerTitle: 'Responsable du traitement', controllerLead: 'Le responsable du traitement est Gianluca Collu. Pour toute demande concernant vos données, contactez :', phone: 'appelez le +39 339 882 5146',
                dataTitle: 'Données et finalités', data1: 'Lorsque vous envoyez une demande de séjour, le formulaire traite votre nom, votre adresse e-mail, votre numéro de téléphone, les dates souhaitées, le nombre de voyageurs, le logement choisi et, le cas échéant, votre message. Le téléphone est requis pour pouvoir vous recontacter ; le message est facultatif. Merci de ne pas inclure de données de santé ni d’autres informations sensibles.',
                data2: 'Les données servent à répondre à votre demande, à vérifier les disponibilités et les tarifs et, si vous le souhaitez, à prendre les mesures nécessaires avant un éventuel contrat. La base juridique est la prise de mesures précontractuelles à votre demande (article 6, paragraphe 1, point b du RGPD). Si la réservation est confirmée, certaines données peuvent être traitées pour respecter des obligations légales ou défendre des droits.',
                data3: 'Toutes les demandes sont envoyées à Gianluca Collu via EmailJS et reçues à l’adresse ci-dessus. Pour les logements gérés par des tiers, Gianluca Collu transmet au propriétaire ou au gestionnaire concerné les données nécessaires pour vérifier les disponibilités et répondre. Celui-ci traite ensuite les données pour ses propres finalités et selon sa propre notice de confidentialité. L’envoi d’une demande ne confirme pas automatiquement une réservation.',
                providersTitle: 'Où les données sont traitées', emailjs: 'EmailJS transmet les demandes. Selon sa notice, ses principaux serveurs se trouvent aux États-Unis et les transferts depuis l’Europe sont encadrés par des clauses contractuelles types. EmailJS peut enregistrer des métadonnées et l’activité des demandes ; l’enregistrement de l’activité des e-mails peut être désactivé dans les paramètres.',
                gmail: 'Google/Gmail héberge la boîte de réception des demandes. Les messages y restent jusqu’à leur suppression par le responsable du traitement, selon les paramètres du service.',
                supabase: 'Supabase fournit les données publiques de tarifs et de disponibilités. Les données personnelles d’une réservation confirmée sont saisies manuellement dans l’espace d’administration. La base de données principale du projet est hébergée dans la région West EU (Irlande, eu-west-1). Cela ne signifie pas que tous les services techniques ou sous-traitants opèrent uniquement dans l’UE.',
                technical: 'Le site charge des ressources techniques depuis Google Fonts, Google Maps, jsDelivr, cdnjs/Cloudflare et des images depuis Unsplash. Lors de leur chargement, ces fournisseurs peuvent recevoir des données techniques, comme l’adresse IP, le navigateur et l’heure de la requête. Le fournisseur d’hébergement dépendra du service choisi pour publier le site.',
                providersNote: 'Les paramètres réels de l’hébergement, de la région Supabase, de Gmail et d’EmailJS déterminent la conservation technique et les éventuels transferts internationaux ; ils doivent être vérifiés dans les comptes concernés.',
                retentionTitle: 'Conservation', retention: 'Les demandes non suivies d’une réservation sont conservées dans la boîte de réception pendant 12 mois au maximum après le dernier échange, puis supprimées, sauf nécessité liée à un litige ou à une obligation légale. Les données des réservations confirmées sont conservées pendant le séjour, puis uniquement pendant la durée requise par les obligations fiscales et comptables ou pour défendre des droits. Les copies et journaux techniques des fournisseurs suivent leurs propres paramètres et politiques.',
                cookiesTitle: 'Données techniques et cookies', cookies: 'Le site n’intègre pas d’outils d’analyse, de profilage publicitaire ni de pixels marketing. Il utilise le stockage local du navigateur pour une copie technique des tarifs et disponibilités, sans y enregistrer de nom, d’adresse e-mail ou de numéro de téléphone. Les bibliothèques, cartes et images externes peuvent néanmoins recevoir des données de connexion. Si des cookies non essentiels ou des outils de suivi sont ajoutés, le consentement sera demandé avant leur activation.',
                provisionTitle: 'Fourniture des données', provision: 'Le nom, l’adresse e-mail, le téléphone, les dates et le nombre de voyageurs sont nécessaires pour traiter la demande ; sans ces informations, le formulaire ne peut pas être envoyé. Le message est facultatif. Aucune donnée de paiement n’est collectée par ce formulaire et les données ne sont pas utilisées à des fins de marketing.',
                rightsTitle: 'Vos droits', rights: 'Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de vos données, ou vous opposer aux traitements fondés sur l’intérêt légitime, en écrivant à l’adresse e-mail ci-dessus. Vous pouvez également saisir le Garante per la protezione dei dati personali. Ces droits peuvent être limités par la loi, par exemple lorsque des données doivent être conservées à des fins fiscales ou pour défendre un droit.',
                noDecisions: 'Aucune décision automatisée ni aucun profilage ne sont réalisés concernant les demandes de séjour.', back: 'Retour au site', updated: 'Dernière mise à jour : 5 novembre 2026'
            }
        },
        de: {
            ui: {
                language: 'Sprache', resultOne: '{count} Unterkunft', results: '{count} Unterkünfte', filters: 'Filter', zone: 'Region', guests: 'Gäste', price: 'Preis pro Nacht', bedrooms: 'Schlafzimmer', search: 'Suchen', reset: 'Zurücksetzen',
                allAreas: 'Alle Regionen', anyGuests: 'Beliebige Anzahl', anyBedrooms: 'Beliebig', threeBedrooms: '3 Schlafzimmer', fourBedrooms: '4+ Schlafzimmer',
                close: 'Schließen', openFullPhoto: 'Foto im Vollbild öffnen', namePlaceholder: 'z. B. Alex Müller', guestsPlaceholder: 'z. B. 4',
                cardBedroom: '{count} Schlafzimmer', cardBedrooms: '{count} Schlafzimmer', cardGuest: '{count} Gast', cardGuests: '{count} Gäste', cardBathroom: '{count} Badezimmer', cardBathrooms: '{count} Badezimmer', photoNumber: 'Foto {number}', rightsReserved: 'Alle Rechte vorbehalten.',
                weekdays: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
                noProperties: 'Keine Unterkünfte gefunden', noPropertiesHelp: 'Ändere die Filter und versuche es erneut.', loadError: 'Unterkünfte sind vorübergehend nicht verfügbar', loadErrorHelp: 'Bitte versuche es später erneut oder kontaktiere uns.',
                details: 'Details ansehen', description: 'Beschreibung', readMore: 'Mehr lesen', showLess: 'Weniger anzeigen', locationInfo: 'Über die Lage', map: 'Standort', availability: 'Verfügbarkeit',
                minStay: 'Mindestaufenthalt:', nights: 'Nächte', nightUnit: 'Nacht', available: 'Verfügbar', unavailable: 'Nicht verfügbar', occupied: 'Gebucht', pricePerNight: 'Preis pro Nacht', bookNow: 'Anfrage senden',
                bookingTitle: 'Anfrage zum Aufenthalt', guestName: 'Vor- und Nachname *', email: 'E-Mail *', phone: 'Telefon *', arrival: 'Anreise *', departure: 'Abreise *', guestCount: 'Anzahl der Gäste *', message: 'Nachricht (optional)',
                messagePlaceholder: 'Schreibe eine Nachricht an den Gastgeber...', noSensitive: 'Bitte gib keine Gesundheitsdaten oder andere sensible Informationen an.', summary: 'Zusammenfassung der Anfrage', property: 'Unterkunft:', checkIn: 'Anreise:', checkOut: 'Abreise:', totalNights: 'Nächte:', averageNight: 'Durchschnittspreis pro Nacht:', total: 'Gesamt:',
                readPrivacy: 'Ich bestätige, dass ich die ', privacy: 'Datenschutzhinweise', sendRequest: 'Anfrage senden', sending: 'Wird gesendet…',
                emailUnavailable: 'Der Versanddienst ist nicht verfügbar. Bitte versuche es später erneut oder kontaktiere uns per E-Mail.', propertyUnavailable: 'Unterkunft nicht gefunden.', requiredFields: 'Bitte fülle alle Pflichtfelder aus.', invalidDates: 'Die Abreise muss nach der Anreise liegen.',
                minStayError: 'Der Mindestaufenthalt beträgt {count} Nächte.', maxStayError: 'Der Höchstaufenthalt beträgt {count} Nächte.', requestSent: 'Anfrage gesendet. Wir antworten an {email}. Der Aufenthalt ist erst nach unserer Bestätigung gebucht.', requestError: 'Die Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe an {email}.',
                calendarUnavailable: 'Kalenderverbindung nicht verfügbar. Die letzte gespeicherte Kopie ist vom {date}; bitte prüfe die Verfügbarkeit vor der Bestätigung.', calendarUnavailableNoCache: 'Kalenderverbindung nicht verfügbar. Die angezeigten Daten sind möglicherweise veraltet; bitte prüfe die Verfügbarkeit manuell.', calendarUpdated: 'Verfügbarkeit und Preise aktualisiert: {date}.',
                photoViewer: 'Fotogalerie', closePhoto: 'Foto schließen', previousPhoto: 'Vorheriges Foto', nextPhoto: 'Nächstes Foto', privacyFooter: 'Datenschutzhinweise', backToSite: 'Zurück zur Website',
                or: 'oder', referenceLinks: 'Weitere Informationen:', emailjsPolicy: 'Datenschutzerklärung von EmailJS', emailjsDpa: 'Auftragsverarbeitungsvertrag', googlePolicy: 'Datenschutzerklärung von Google', supabasePolicy: 'Datenschutzerklärung', supabaseDpa: 'Auftragsverarbeitungsvertrag'
            },
            content: {
                pageTitle: 'Sa Ruxi Stay | Aufenthalt zwischen Stadt und Meer',
                header: { navigation: ['Startseite', 'Unterkünfte', 'Region', 'Über mich', 'Kontakt'] },
                hero: { title: 'Finde deinen passenden Aufenthalt', subtitle: 'Entdecke die Landschaften, Strände und das lokale Leben im Süden Sardiniens.', buttonText: 'Unterkünfte ansehen' },
                casesSection: { title: 'Unterkünfte', subtitle: 'Sorgfältig ausgewählte Orte für eine entspannte Zeit auf Sardinien.' },
                territory: {
                    title: 'Südsardinien, zwischen Cagliari und Villasimius', description: '', mainTitle: 'Meerblick und unvergessliche Sonnenuntergänge', mainDescription: 'Entdecke die Küste, die Altstadt von Cagliari, die lokale Küche und die Strände rund um Villasimius in deinem eigenen Tempo.',
                    highlights: [{ title: 'Am Meer', description: 'Entdecke Buchten und Küsten im Süden Sardiniens.' }, { title: 'Cagliari', description: 'Besuche die Altstadt, den Hafen und lokale Restaurants.' }, { title: 'Strände von Villasimius', description: 'Erkunde Buchten und Strände entlang der Küste.' }, { title: 'Regionale Küche', description: 'Probiere sardische Spezialitäten und lokale Weine.' }],
                    regions: [{ name: 'Südsardinien', description: 'Strände, Buchten und Küstenorte zwischen Cagliari und Villasimius.', highlights: ['Cagliari', 'Villasimius', 'Torre delle Stelle'] }]
                },
                about: { title: 'Über mich', subtitle: 'Ein Projekt von Gianluca Collu', mainTitle: 'Gastfreundschaft mit Bedacht', paragraphs: ['Sardinien ist eine besondere Insel mit eindrucksvollen Landschaften, tief verwurzelten Traditionen und einem ruhigeren Lebensrhythmus.', 'Aus dieser Verbundenheit entstand das Projekt: einladende Unterkünfte, aufmerksame Gastfreundschaft und Respekt für die Orte und ihren Rhythmus.', 'Ich helfe Gästen, die Insel jenseits der Strände kennenzulernen, und teile Landschaften, Traditionen, regionale Küche und Orte, die ich gut kenne.', 'Ein Aufenthalt ist eine Gelegenheit, langsamer zu werden, den Alltag hinter sich zu lassen und die eigene Zeit ohne festen Plan zu genießen.', 'Wahrer Komfort bedeutet nicht nur, an einem schönen Ort zu sein, sondern sich dort zuhause zu fühlen.'], closing: 'Willkommen auf Sardinien.' },
                contact: { title: 'Kontakt', description: 'Für Informationen zu Unterkünften, Verfügbarkeit und Preisen erreichst du mich telefonisch oder per E-Mail.', methods: ['Telefon', 'E-Mail'], buttonText: 'Unterkünfte ansehen' },
                filters: { title: 'Finde deinen Aufenthalt', locations: [{ label: 'Alle Regionen', value: '' }, { label: 'Südsardinien', value: 'Sud Sardegna' }, { label: 'Villasimius', value: 'Villasimius' }], guests: [{ label: 'Beliebige Anzahl', value: '' }, { label: '2 Gäste', value: '2' }, { label: '4 Gäste', value: '4' }, { label: '6 Gäste', value: '6' }, { label: '8+ Gäste', value: '8' }], priceRange: { label: 'Preis pro Nacht' } },
                footer: { tagline: 'Ein Projekt von Gianluca Collu' }
            },
            properties: {
                'Villa Karla': { badge: 'Villa mit Meerblick', summary: 'Dreistöckiges Haus in Porto Sa Ruxi mit Veranda und privatem Garten. Der Strand ist in wenigen Minuten zu Fuß erreichbar.', description: 'Dreistöckiges Haus in den Hügeln von Porto Sa Ruxi, etwa 6 km von Villasimius entfernt, in einer ruhigen Anlage mit Blick auf weiße Sandstrände und Granitfelsen. Es bietet Platz für bis zu fünf Gäste in drei Schlafzimmern mit vier Betten. Im oberen Stock liegen zwei Schlafzimmer mit Deckenventilatoren und Klimaanlage sowie ein Bad mit Dusche. Das Schlafzimmer im unteren Stock hat einen Deckenventilator und ein zweites Bad ohne Dusche. Zum Haus gehören außerdem eine überdachte, luftige Veranda mit Meerblick, ein umzäunter Privatgarten mit Essbereich, ein Holzkohlegrill und eine Außendusche. Der Strand von Porto Sa Ruxi ist über eine Unterführung in wenigen Minuten zu Fuß erreichbar. Für weitere Strände, Geschäfte und Restaurants ist ein Auto erforderlich. Wegen der Treppen ist die Unterkunft für Kinder unter drei Jahren und Personen mit eingeschränkter Mobilität nicht empfohlen. In der Anlage gibt es außerdem einen Tennisplatz, der gegen eine geringe Gebühr genutzt werden kann.', location: 'Porto Sa Ruxi', region: 'Villasimius', locationInfo: 'Porto Sa Ruxi ist ein Küstenort im Meeresschutzgebiet Villasimius mit weißen Sandstränden, Granitfelsen und Buchten mit klarem Wasser. Der nächste Strand ist über eine Unterführung zu Fuß erreichbar; für weitere Strände und Dienstleistungen ist ein Auto erforderlich.', features: [['Blick auf die Bucht', 'Meerblick'], ['Strandzugang', 'Wenige Minuten zu Fuß'], ['Küche', 'Vorhanden'], ['WLAN', 'Vorhanden'], ['Privatgarten', 'Umzäunt'], ['Außendusche', 'Vorhanden'], ['Veranda', 'Überdacht und luftig'], ['Grill', 'Holzkohle'], ['Tennisplatz', 'Gegen geringe Gebühr']] },
                Cagliari: { badge: 'Meerblick', summary: 'Penthouse im Fiera-Viertel von Cagliari mit privater Terrasse und Meerblick. Stadtzentrum und Poetto-Strand sind gut erreichbar.', description: '40 m² großes Penthouse im fünften Stock eines Wohnhauses im Fiera-Viertel von Cagliari. Es bietet Platz für bis zu vier Personen: ein helles Schlafzimmer mit Bett, Schreibtisch, Fernseher und Kleiderschrank sowie ein Wohnzimmer mit großen Fenstern und Meerblick, Küchenzeile und Schlafsofa für zwei Personen. Zur Ausstattung gehören ein Bad mit Dusche, Küchenzeile, Waschmaschine, WLAN, Arbeitsplatz und eine große private Panoramaterrasse mit Essbereich. Der Aufzug fährt bis zum vierten Stock; zum Penthouse führt eine letzte Treppe. Der Check-in ist zwischen 14 und 19 Uhr mit Schlüsselsafe möglich, der Check-out bis 10 Uhr.', location: 'Cagliari', region: 'Südsardinien', locationInfo: 'Das Penthouse liegt im ruhigen Wohnviertel Fiera. Das Messegelände ist etwa 50 m, das Stadion 1,2 km und das Stadtzentrum rund 2,3 km entfernt. Der Poetto-Strand ist mit den Buslinien PF und PQ erreichbar, die in der Nähe halten. CRAI liegt etwa 300 m und Conad City 500 m entfernt; weitere kleine Lebensmittelgeschäfte, Gemüseläden, Feinkostläden und Metzgereien befinden sich in der Umgebung. Die angegebene kommunale Kurtaxe beträgt 1,50 € pro Person und Nacht und ist beim Check-in zu zahlen.', features: [['Private Terrasse', 'Meerblick und Essbereich'], ['Küche', 'Küchenzeile'], ['WLAN', 'Vorhanden'], ['Parkplatz', 'Kostenlos vor Ort'], ['Arbeitsplatz', 'Schreibtisch im Schlafzimmer'], ['Waschmaschine', 'Vorhanden'], ['Fernseher', 'Im Schlafzimmer'], ['Self-Check-in', 'Schlüsselsafe']] }
            },
            privacy: {
                title: 'Datenschutzhinweise', intro: 'Diese Hinweise erläutern, wie Sa Ruxi Stay personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeitet.',
                controllerTitle: 'Verantwortlicher', controllerLead: 'Verantwortlicher für die Datenverarbeitung ist Gianluca Collu. Bei Fragen zum Datenschutz erreichst du ihn unter:', phone: 'telefonisch unter +39 339 882 5146',
                dataTitle: 'Daten und Zwecke', data1: 'Wenn du eine Aufenthaltsanfrage sendest, verarbeitet das Formular deinen Namen, deine E-Mail-Adresse, Telefonnummer, gewünschten Reisedaten, Gästezahl, die ausgewählte Unterkunft und gegebenenfalls deine Nachricht. Die Telefonnummer ist erforderlich, damit wir dich kontaktieren können; die Nachricht ist freiwillig. Bitte gib keine Gesundheitsdaten oder andere sensible Informationen an.',
                data2: 'Die Daten werden verwendet, um auf deine Anfrage zu antworten, Verfügbarkeit und Preise zu prüfen und auf Wunsch erforderliche Schritte vor einem möglichen Vertrag vorzunehmen. Rechtsgrundlage sind vorvertragliche Maßnahmen auf deine Anfrage hin (Art. 6 Abs. 1 lit. b DSGVO). Bei bestätigter Buchung können einige Daten zur Erfüllung gesetzlicher Pflichten sowie zur Geltendmachung oder Verteidigung von Rechtsansprüchen verarbeitet werden.',
                data3: 'Alle Anfragen werden über EmailJS an Gianluca Collu gesendet und an die oben genannte E-Mail-Adresse zugestellt. Bei Unterkünften, die von Dritten betrieben werden, leitet Gianluca Collu die erforderlichen Angaben an den jeweiligen Eigentümer oder Verwalter weiter, damit dieser die Verfügbarkeit prüft und antwortet. Dieser verarbeitet die Daten anschließend für eigene Zwecke und nach seinen eigenen Datenschutzhinweisen. Eine Anfrage ist noch keine Buchungsbestätigung.',
                providersTitle: 'Wo Daten verarbeitet werden', emailjs: 'EmailJS übermittelt die Anfragen. Laut Datenschutzhinweisen befinden sich die Hauptserver in den USA; Übermittlungen aus Europa werden durch Standardvertragsklauseln abgesichert. EmailJS kann Metadaten und Anfrageaktivitäten speichern; die Protokollierung der E-Mail-Aktivität lässt sich in den Einstellungen deaktivieren.',
                gmail: 'Google/Gmail hostet das Postfach, in dem Anfragen eingehen. Nachrichten bleiben dort, bis sie vom Verantwortlichen gelöscht werden, gemäß den Einstellungen des Dienstes.',
                supabase: 'Supabase stellt öffentliche Preis- und Verfügbarkeitsdaten bereit. Personenbezogene Daten einer bestätigten Buchung werden manuell im Adminbereich eingetragen. Die primäre Projektdatenbank wird in West EU (Irland, eu-west-1) gehostet. Daraus folgt nicht, dass alle technischen Dienste oder Unterauftragsverarbeiter ausschließlich in der EU tätig sind.',
                technical: 'Die Website lädt technische Ressourcen von Google Fonts, Google Maps, jsDelivr, cdnjs/Cloudflare und Bilder von Unsplash. Beim Abruf können diese Anbieter technische Daten wie IP-Adresse, Browser und Zeitpunkt der Anfrage erhalten. Der Hostinganbieter hängt vom später gewählten Veröffentlichungsdienst ab.',
                providersNote: 'Die tatsächliche Speicherung und mögliche internationale Übermittlungen hängen von den Einstellungen für Hosting, Supabase-Region, Gmail und EmailJS ab; diese sind in den jeweiligen Konten zu prüfen.',
                retentionTitle: 'Speicherdauer', retention: 'Anfragen ohne anschließende Buchung werden höchstens zwölf Monate nach dem letzten Kontakt im Postfach aufbewahrt und danach gelöscht, sofern sie nicht für einen Rechtsstreit oder eine gesetzliche Pflicht benötigt werden. Daten bestätigter Buchungen werden für die Durchführung des Aufenthalts und anschließend nur so lange gespeichert, wie es steuerliche und buchhalterische Pflichten oder die Verteidigung von Rechtsansprüchen erfordern. Kopien und technische Protokolle der Anbieter richten sich nach deren Einstellungen und Richtlinien.',
                cookiesTitle: 'Technische Daten und Cookies', cookies: 'Die Website verwendet keine Analyse-Tools, Werbeprofile oder Marketing-Pixel. Im lokalen Browserspeicher wird eine technische Kopie von Preisen und Verfügbarkeiten abgelegt, jedoch keine Namen, E-Mail-Adressen oder Telefonnummern. Externe Bibliotheken, Karten und Bilder können dennoch Verbindungsdaten erhalten. Werden künftig nicht notwendige Cookies oder Tracking-Tools eingesetzt, wird vor ihrer Aktivierung eine Einwilligung eingeholt.',
                provisionTitle: 'Bereitstellung der Daten', provision: 'Name, E-Mail-Adresse, Telefonnummer, Reisedaten und Gästezahl sind für die Bearbeitung der Anfrage erforderlich; ohne diese Angaben kann das Formular nicht gesendet werden. Die Nachricht ist freiwillig. Über das Formular werden keine Zahlungsdaten erhoben und die Daten werden nicht für Marketing verwendet.',
                rightsTitle: 'Deine Rechte', rights: 'Du kannst Auskunft, Berichtigung, Löschung, Einschränkung oder Übertragbarkeit deiner Daten verlangen oder einer Verarbeitung auf Grundlage berechtigter Interessen widersprechen. Schreibe dazu an die oben genannte E-Mail-Adresse. Außerdem kannst du dich bei der italienischen Datenschutzbehörde Garante per la protezione dei dati personali beschweren. Rechte können gesetzlichen Ausnahmen unterliegen, etwa wenn Daten für steuerliche Pflichten oder zur Verteidigung von Rechtsansprüchen gespeichert werden müssen.',
                noDecisions: 'Im Zusammenhang mit Aufenthaltsanfragen finden keine automatisierten Entscheidungen oder Profilbildungen statt.', back: 'Zurück zur Website', updated: 'Zuletzt aktualisiert: 5. November 2026'
            }
        }
    };

    const supported = Object.keys(translations);

    function normalizeLocale(value) {
        const language = String(value || '').toLowerCase().split(/[-_]/)[0];
        return supported.includes(language) ? language : null;
    }

    function detectLocale() {
        try {
            const saved = normalizeLocale(localStorage.getItem(preferenceKey));
            if (saved) return saved;
        } catch (error) {
            // Storage can be unavailable in private browsing contexts.
        }
        const browserLanguages = navigator.languages || [navigator.language];
        for (const candidate of browserLanguages) {
            const locale = normalizeLocale(candidate);
            if (locale) return locale;
        }
        return 'it';
    }

    let currentLocale = detectLocale();
    const initialDocumentTitle = document.title;

    function getPath(object, path) {
        return path.split('.').reduce((value, part) => value && value[part], object);
    }

    function translate(key, values = {}) {
        const translationKey = key.startsWith('ui.') ? key.slice(3) : key;
        const value = getPath(translations[currentLocale].ui, translationKey) ?? getPath(translations.it.ui, translationKey) ?? key;
        return Object.entries(values).reduce((text, [name, replacement]) => text.replaceAll(`{${name}}`, replacement), value);
    }

    function deepMerge(base, override) {
        if (Array.isArray(override)) return override;
        if (!override || typeof override !== 'object') return override === undefined ? base : override;
        const result = { ...base };
        for (const [key, value] of Object.entries(override)) {
            result[key] = deepMerge(base && base[key], value);
        }
        return result;
    }

    function localizeContent(content) {
        const localeContent = translations[currentLocale].content;
        if (!localeContent) return content;
        const localized = deepMerge(content, localeContent);
        const originalNavigation = content.header.navigation;
        if (localeContent.header && localeContent.header.navigation) {
            localized.header.navigation = originalNavigation.map((item, index) => ({ ...item, label: localeContent.header.navigation[index] || item.label }));
        }
        if (localeContent.contact && localeContent.contact.methods) {
            localized.contact.methods = content.contact.methods.map((item, index) => ({ ...item, title: localeContent.contact.methods[index] || item.title }));
        }
        return localized;
    }

    function localizeProperties(properties) {
        const propertyTranslations = translations[currentLocale].properties || {};
        return properties.map(property => {
            const translation = propertyTranslations[property.id] || propertyTranslations[property.location];
            if (!translation) return property;
            const localized = { ...property, ...translation };
            localized.region = property.region;
            if (translation.features) {
                localized.features = property.features.map((feature, index) => ({
                    ...feature,
                    title: translation.features[index]?.[0] || feature.title,
                    value: translation.features[index]?.[1] || feature.value
                }));
            }
            return localized;
        });
    }

    function applyStaticTranslations(root = document) {
        root.querySelectorAll('[data-i18n]').forEach(element => {
            element.textContent = translate(element.dataset.i18n);
        });
        root.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            element.setAttribute('placeholder', translate(element.dataset.i18nPlaceholder));
        });
        root.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
            element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel));
        });
        root.querySelectorAll('[data-i18n-title]').forEach(element => {
            element.setAttribute('title', translate(element.dataset.i18nTitle));
        });
        document.documentElement.lang = currentLocale;
        document.title = getPath(translations[currentLocale], 'content.pageTitle') || document.title;
        updateLanguageButtons();
    }

    function applyPrivacyTranslations(root = document) {
        root.querySelectorAll('[data-i18n-privacy]').forEach(element => {
            const key = element.dataset.i18nPrivacy;
            if (!element.dataset.defaultTranslation) {
                element.dataset.defaultTranslation = element.textContent;
            }
            const value = getPath(translations[currentLocale].privacy, key)
                ?? element.dataset.defaultTranslation;
            element.textContent = value;
        });
        document.documentElement.lang = currentLocale;
        document.title = getPath(translations[currentLocale], 'privacy.title') || initialDocumentTitle;
    }

    function updateLanguageButtons() {
        document.querySelectorAll('.language-button').forEach(button => {
            const isCurrent = button.dataset.locale === currentLocale;
            button.classList.toggle('is-active', isCurrent);
            button.setAttribute('aria-pressed', String(isCurrent));
        });
    }

    function setLocale(locale) {
        const normalized = normalizeLocale(locale);
        if (!normalized) return;
        try {
            localStorage.setItem(preferenceKey, normalized);
        } catch (error) {
            // Keep the new locale for this page even if storage is unavailable.
        }
        if (normalized === currentLocale) {
            updateLanguageButtons();
            return;
        }
        currentLocale = normalized;
        applyStaticTranslations();
        if (document.querySelector('[data-i18n-privacy]')) applyPrivacyTranslations();
        window.dispatchEvent(new CustomEvent('sa-ruxi-locale-change', { detail: { locale: currentLocale } }));
    }

    function initLanguageSelector() {
        document.querySelectorAll('.language-button').forEach(button => {
            button.addEventListener('click', () => setLocale(button.dataset.locale));
        });
        updateLanguageButtons();
    }

    function formatNumber(value, options = {}) {
        return new Intl.NumberFormat(localeCodes[currentLocale], options).format(value);
    }

    function formatDate(value, options = { year: 'numeric', month: 'long', day: 'numeric' }) {
        if (!value) return '';
        const [year, month, day] = value.split('-').map(Number);
        return new Intl.DateTimeFormat(localeCodes[currentLocale], options).format(new Date(year, month - 1, day));
    }

    window.SaRuxiI18n = {
        get locale() { return currentLocale; },
        translate,
        localizeContent,
        localizeProperties,
        applyStaticTranslations,
        applyPrivacyTranslations,
        initLanguageSelector,
        formatNumber,
        formatDate
    };
})();
