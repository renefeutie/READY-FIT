/**
 * @file js/i18n.js
 * @description Système bilingue (Français / Anglais) pour READY FIT.
 * Gère le dictionnaire de traduction, la détection de la langue,
 * le stockage en localStorage et la mise à jour dynamique du DOM.
 */

export const translations = {
  fr: {
    // Meta & Head
    meta_title: "READY FIT | Salle de Sport & Performance Haute Intensité",
    meta_description: "Dépassez vos limites chez READY FIT. Salle de musculation, cardio, CrossFit, boxe, yoga et coaching personnalisé. Planning 7j/7, tarifs FCFA et calculateur d'IMC.",
    skip_link: "Aller au contenu principal",

    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_disciplines: "Disciplines",
    nav_schedule: "Planning",
    nav_pricing: "Tarifs",
    nav_coaches: "Coachs",
    nav_contact: "Contact",
    nav_join: "Rejoindre",
    nav_lang_label: "Sélecteur de langue",

    // Hero
    hero_kicker: "CENTRE DE HAUTE PERFORMANCE & CONDITIONNEMENT",
    hero_title: "SOIS PRÊT. DÉPASSE-TOI.",
    hero_subtitle: "Plus qu'une salle de sport : un sanctuaire d'acier, de discipline et de résultats concrets. Rejoins l'élite et libère ton potentiel athlétique maximal.",
    hero_btn_join: "S'inscrire maintenant",
    hero_btn_schedule: "Voir le planning",
    hero_stat_members_num: "500+",
    hero_stat_members_label: "Membres actifs",
    hero_stat_coaches_num: "15",
    hero_stat_coaches_label: "Coachs certifiés",
    hero_stat_open_num: "7j/7",
    hero_stat_open_label: "Accès & entraînements",
    hero_scroll: "Défiler vers le bas",

    // About
    about_kicker: "NOTRE HISTOIRE & PHILOSOPHIE",
    about_title: "FORGÉ POUR LES ATHLÈTES EN QUÊTE D'EXCELLENCE",
    about_p1: "Chez READY FIT, nous rejetons les compromis et les promesses faciles. Conçu selon les standards stricts des laboratoires de performance sportive, notre espace combine équipement biomécanique de pointe, encadrement d'élite et culture de dépassement.",
    about_p2: "Que tu débutes ton parcours de remise en forme ou que tu prépares une compétition sportive exigeante, notre infrastructure est configurée pour mesurer chaque progrès et transformer chaque goutte de sueur en puissance durable.",
    about_val1_title: "Discipline",
    about_val1_desc: "La rigueur quotidienne bâtit la confiance. Nous inculquons la constance qui transforme l'effort en habitude invincible.",
    about_val2_title: "Énergie",
    about_val2_desc: "Une atmosphère électrique portée par une acoustique immersive, un éclairage maîtrisé et une intensité contagieuse.",
    about_val3_title: "Communauté",
    about_val3_desc: "Une meute solidaire d'athlètes et de passionnés qui s'encouragent, se challengent et célèbrent chaque victoire ensemble.",

    // Disciplines
    disciplines_kicker: "PROGRAMMES D'ENTRAÎNEMENT",
    disciplines_title: "EXPLORE NOS DISCIPLINES",
    disciplines_subtitle: "Des curriculums structurés conçus par des préparateurs physiques pour sculpter la force, l'endurance et l'agilité.",
    disc_strength_title: "Musculation & Force",
    disc_strength_desc: "Plateaux de force libres, charges olympiques Hammer Strength et guidées pour une hypertrophie et une puissance brute optimales.",
    disc_cardio_title: "Cardio & Endurance",
    disc_cardio_desc: "Rameurs, tapis inclinés, assault bikes et circuits HIIT haute cadence pour forger un cœur d'athlète et brûler un maximum de calories.",
    disc_crossfit_title: "CrossFit & WOD",
    disc_crossfit_desc: "Mouvements fonctionnels constamment variés à haute intensité : haltérophilie, gymnastique et conditionnement métabolique.",
    disc_boxing_title: "Boxe & Fight Club",
    disc_boxing_desc: "Frappes au sac, travail aux pao, esquives et jeux de jambes pour affûter vos réflexes, votre explosivité et votre mental d'acier.",
    disc_yoga_title: "Yoga & Mobilité",
    disc_yoga_desc: "Vinyasa dynamique, décompression articulaire, renforcement profond et assouplissements pour prévenir les blessures.",
    disc_coach_title: "Coaching Personnalisé",
    disc_coach_desc: "Suivi individuel sur-mesure, bilan biomécanique, programmation nutritionnelle personnalisée et résultats garantis.",

    // Planning / Schedule
    schedule_kicker: "CALENDRIER HEBDOMADAIRE",
    schedule_title: "PLANNING DES COURS COLLECTIFS",
    schedule_subtitle: "Filtrez par discipline pour découvrir les sessions animées chaque jour par notre équipe de coachs professionnels.",
    filter_all: "Toutes les disciplines",
    filter_crossfit: "CrossFit",
    filter_boxing: "Boxe",
    filter_cardio: "Cardio HIIT",
    filter_yoga: "Yoga & Mobilité",
    filter_strength: "Force & Muscu",
    table_head_day: "Jour",
    table_head_time: "Heure",
    table_head_discipline: "Discipline",
    table_head_coach: "Coach",
    table_head_level: "Niveau",
    table_head_action: "Réservation",
    table_book_btn: "Réserver",
    table_empty: "Aucune session trouvée pour ce filtre.",

    // Days
    day_monday: "Lundi",
    day_tuesday: "Mardi",
    day_wednesday: "Mercredi",
    day_thursday: "Jeudi",
    day_friday: "Vendredi",
    day_saturday: "Samedi",
    day_sunday: "Dimanche",

    // Levels
    level_all: "Tous niveaux",
    level_intermediate: "Intermédiaire",
    level_advanced: "Avancé",

    // Pricing
    pricing_kicker: "OFFRES & ABONNEMENTS",
    pricing_title: "DES TARIFS CLAIRS, SANS FRAIS CACHÉS",
    pricing_subtitle: "Investissez dans votre capital santé et rejoignez READY FIT dès aujourd'hui. Tarification avantageuse en FCFA.",
    billing_monthly: "Mensuel",
    billing_annual: "Annuel (-20%)",
    annual_badge: "2 MOIS OFFERTS",
    currency_fcfa: "FCFA",
    per_month: "/ mois",
    per_year: "/ an",
    plan_popular_badge: "LE PLUS POPULAIRE",
    plan_basic_title: "BASIC",
    plan_basic_desc: "Idéal pour un entraînement autonome sur les plateaux de musculation et de cardio libre.",
    plan_premium_title: "PREMIUM",
    plan_premium_desc: "La formule signature : accès illimité aux installations et à tous les cours collectifs dirigés.",
    plan_vip_title: "VIP ÉLITE",
    plan_vip_desc: "L'expérience absolue : coaching sur-mesure, espace récupération, nutrition et vestiaire dédié.",
    plan_btn_select: "Choisir cette formule",

    // Plan features
    feat_access_gym: "Accès libre salle musculation & cardio",
    feat_locker: "Casiers sécurisés & douches chaudes",
    feat_app: "Application de suivi d'entraînement",
    feat_classes: "Accès illimité à tous les cours collectifs (CrossFit, Boxe, Yoga)",
    feat_assessment: "1 bilan biomécanique complet offert",
    feat_guest: "1 invitation invité gratuite par mois",
    feat_vip_coaching: "4 séances de coaching personnel / mois",
    feat_vip_nutrition: "Plan nutritionnel personnalisé & réajusté",
    feat_vip_lounge: "Accès espace récupération & sauna",
    feat_vip_towel: "Service serviette & vestiaire réservé",

    // BMI Calculator
    bmi_kicker: "ANALYSE BIOMÉTRIQUE",
    bmi_title: "CALCULATEUR D'INDICE DE MASSE CORPORELLE",
    bmi_subtitle: "Évaluez votre corpulence en quelques secondes pour cibler vos objectifs de transformation physique avec précision.",
    bmi_label_weight: "Poids corporel (kg)",
    bmi_placeholder_weight: "Ex: 75",
    bmi_label_height: "Taille (cm)",
    bmi_placeholder_height: "Ex: 180",
    bmi_btn_calculate: "Calculer mon IMC",
    bmi_result_title: "Votre Indice de Masse Corporelle",
    bmi_result_placeholder: "Entrez votre poids et votre taille puis cliquez sur Calculer.",
    bmi_cat_underweight: "Insuffisance pondérale (< 18.5)",
    bmi_cat_normal: "Corpulence normale (18.5 - 24.9)",
    bmi_cat_overweight: "Surpoids (25.0 - 29.9)",
    bmi_cat_obese: "Obésité (≥ 30.0)",
    bmi_advice_underweight: "Conseil READY FIT : Priorisez un programme de renforcement musculaire avec un surplus calorique contrôlé pour bâtir de la masse maigre.",
    bmi_advice_normal: "Conseil READY FIT : Excellente condition de base. Maintenez vos acquis avec un équilibre entre force athlétique, endurance et mobilité.",
    bmi_advice_overweight: "Conseil READY FIT : Recommandé : associez nos sessions de HIIT Cardio et de CrossFit pour stimuler le métabolisme et optimiser la recomposition.",
    bmi_advice_obese: "Conseil READY FIT : Un accompagnement personnalisé avec nos coachs et un suivi progressif vous permettront d'amorcer une perte de masse grasse sécurisée.",
    bmi_err_invalid: "Veuillez entrer des valeurs valides (poids entre 30 et 300 kg, taille entre 100 et 250 cm).",

    // Coaches
    coaches_kicker: "L'ÉQUIPE TECHNIQUE",
    coaches_title: "RENCONTREZ VOS PRÉPARATEURS",
    coaches_subtitle: "Des athlètes d'expérience et éducateurs sportifs certifiés, passionnés par la biomécanique et le dépassement personnel.",
    coach_1_name: "Marc Mandeng",
    coach_1_role: "Head Coach & Haltérophilie",
    coach_1_bio: "Ancien athlète de compétition, 10 ans d'expertise en préparation de force et dynamométrie sportive.",
    coach_2_name: "Sarah Bella",
    coach_2_role: "Spécialiste CrossFit & HIIT",
    coach_2_bio: "Certifiée CrossFit Level 2, experte en conditionnement métabolique et reprogrammation posturale.",
    coach_3_name: "Kévin Tagne",
    coach_3_role: "Champion de Boxe & Striking",
    coach_3_bio: "Ceinture noire et sparring partner émérite, il transmet l'art noble avec pédagogie et intensité.",
    coach_4_name: "Audrey Ngono",
    coach_4_role: "Professeure de Yoga & Mobilité",
    coach_4_bio: "Formée aux techniques de respiration et souplesse fonctionnelle pour une récupération musculaire profonde.",

    // Testimonials
    testimonials_kicker: "RÉSULTATS PROUVÉS",
    testimonials_title: "ILS ONT CHOISI DE SE DÉPASSER",
    testimonials_subtitle: "Découvrez les retours authentiques de ceux qui ont transformé leur silhouette, leur santé et leur confiance chez READY FIT.",
    testi_1_quote: "En 6 mois chez READY FIT, j'ai perdu 14 kg tout en augmentant ma force au squat de 40 kg. L'émulation entre membres et les conseils des coachs ont complètement changé mon hygiène de vie.",
    testi_1_author: "Christian Eboa",
    testi_1_role: "Membre Premium depuis 1 an",
    testi_2_quote: "Les cours de Boxe et de CrossFit sont d'une intensité rare. L'ambiance est survoltée, les installations sont toujours impeccables et le matériel Hammer Strength est ce qu'il y a de mieux.",
    testi_2_author: "Vanessa Ngo",
    testi_2_role: "Membre VIP Élite",
    testi_3_quote: "Le calculateur d'IMC et le bilan biomécanique initial m'ont permis d'avoir un programme ultra ciblé. Aujourd'hui, je me sens plus rapide, plus tonique et plus confiant que jamais.",
    testi_3_author: "Patrick Mvondo",
    testi_3_role: "Adhérent CrossFit",
    testi_prev_aria: "Avis précédent",
    testi_next_aria: "Avis suivant",

    // Contact
    contact_kicker: "PASSEZ À L'ACTION",
    contact_title: "CONTACTEZ LE CLUB READY FIT",
    contact_subtitle: "Une question sur nos formules, nos cours ou nos équipements ? Notre équipe vous répond sous 24h ou immédiatement par WhatsApp.",
    contact_form_title: "Envoyez-nous un message",
    contact_form_name_label: "Nom complet",
    contact_form_name_placeholder: "Ex: Yannick Noah",
    contact_form_email_label: "Adresse e-mail",
    contact_form_email_placeholder: "Ex: yannick@example.com",
    contact_form_phone_label: "Numéro de téléphone",
    contact_form_phone_placeholder: "Ex: 686 94 26 22",
    contact_form_goal_label: "Votre objectif principal",
    contact_goal_opt_default: "-- Sélectionnez votre priorité --",
    contact_goal_opt_loss: "Perte de poids & sèche",
    contact_goal_opt_muscle: "Prise de masse musculaire & force",
    contact_goal_opt_endurance: "Cardio, souffle & endurance",
    contact_goal_opt_boxe: "Apprentissage Boxe & sports de combat",
    contact_goal_opt_rehab: "Mobilité, souplesse & posture",
    contact_goal_opt_vip: "Coaching privé VIP haute performance",
    contact_form_msg_label: "Votre message",
    contact_form_msg_placeholder: "Décrivez vos attentes, vos créneaux souhaités ou posez vos questions...",
    contact_form_submit: "Envoyer ma demande",
    contact_form_sending: "Envoi en cours...",
    contact_info_title: "Informations & Accès",
    contact_address_label: "Adresse de la salle :",
    contact_address_val: "Boulevard de la Liberté, Akwa - Face Hôtel Prince de Galles, Douala",
    contact_phone_label: "Téléphone direct :",
    contact_phone_val: "(+237) 686 94 26 22",
    contact_email_label: "E-mail de contact :",
    contact_email_val: "contact@readyfit-club.com",
    contact_hours_title: "Horaires d'ouverture :",
    contact_hours_week: "Lundi - Vendredi : 06h00 – 22h00",
    contact_hours_sat: "Samedi : 07h00 – 21h00",
    contact_hours_sun: "Dimanche & Jours fériés : 08h00 – 18h00",
    contact_map_title: "Localisation du Club",
    contact_map_badge: "Parking privé sécurisé 50 places",

    // Validation messages
    val_err_name: "Veuillez entrer votre nom (au moins 2 caractères).",
    val_err_email: "Veuillez entrer une adresse e-mail valide.",
    val_err_phone: "Veuillez entrer un numéro de téléphone valide (ex: 686942622).",
    val_err_goal: "Veuillez sélectionner un objectif dans la liste.",
    val_err_msg: "Votre message doit contenir au moins 10 caractères.",
    val_success_title: "Demande transmise avec succès !",
    val_success_desc: "Merci. Notre responsable d'accueil vous recontactera très rapidement au 686942622 ou par message WhatsApp.",
    val_success_whatsapp_action: "Ouvrir directement dans WhatsApp",

    // WhatsApp Floating Button
    whatsapp_tooltip: "Discuter sur WhatsApp",
    whatsapp_prefilled: "Bonjour READY FIT ! Je souhaite avoir des informations sur les inscriptions et les plannings d'entraînement.",

    // Footer
    footer_tagline: "Le complexe d'entraînement athlétique de référence. Force, puissance et persévérance.",
    footer_col_nav: "Navigation rapide",
    footer_col_hours: "Horaires du centre",
    footer_col_social: "Réseaux sociaux",
    footer_copy: "© 2026 READY FIT. Tous droits réservés. Forge ta légende.",
    footer_back_top: "Haut de page"
  },

  en: {
    // Meta & Head
    meta_title: "READY FIT | High-Intensity Gym & Athletic Performance",
    meta_description: "Push past your limits at READY FIT. Strength training, cardio conditioning, CrossFit, boxing, yoga, and personal coaching. 7-day schedule, XAF pricing, and BMI tool.",
    skip_link: "Skip to main content",

    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_disciplines: "Disciplines",
    nav_schedule: "Schedule",
    nav_pricing: "Pricing",
    nav_coaches: "Coaches",
    nav_contact: "Contact",
    nav_join: "Join Now",
    nav_lang_label: "Language switch",

    // Hero
    hero_kicker: "HIGH-PERFORMANCE ATHLETIC CONDITIONING LAB",
    hero_title: "GET READY. PUSH BEYOND.",
    hero_subtitle: "More than a gym: an obsidian sanctuary of steel, relentless discipline, and measurable outcomes. Join the elite and unlock your peak athletic power.",
    hero_btn_join: "Join Now",
    hero_btn_schedule: "View Schedule",
    hero_stat_members_num: "500+",
    hero_stat_members_label: "Active Members",
    hero_stat_coaches_num: "15",
    hero_stat_coaches_label: "Certified Coaches",
    hero_stat_open_num: "7 Days",
    hero_stat_open_label: "Access & Training",
    hero_scroll: "Scroll down",

    // About
    about_kicker: "OUR HERITAGE & CREED",
    about_title: "FORGED FOR ATHLETES PURSUING UNCOMPROMISING EXCELLENCE",
    about_p1: "At READY FIT, we reject compromises and empty promises. Built strictly according to the rigorous requirements of elite sports laboratories, our arena combines top-tier biomechanical machinery, high-calibre coaching, and a relentless culture of self-mastery.",
    about_p2: "Whether you are taking your first steps toward prime conditioning or prepping for grueling competition, our facility is engineered to track every millimeter of progress and turn raw sweat into unshakeable power.",
    about_val1_title: "Discipline",
    about_val1_desc: "Daily adherence builds unbreakable conviction. We instill the focused consistency that turns effort into permanent habit.",
    about_val2_title: "Energy",
    about_val2_desc: "An electric arena fueled by immersive acoustics, controlled architectural lighting, and infectious training intensity.",
    about_val3_title: "Community",
    about_val3_desc: "A united pack of high-driven athletes and fitness enthusiasts who challenge, inspire, and elevate one another.",

    // Disciplines
    disciplines_kicker: "TRAINING CURRICULUM",
    disciplines_title: "EXPLORE OUR DISCIPLINES",
    disciplines_subtitle: "Structured curriculums engineered by strength coaches to forge raw power, relentless stamina, and peak mobility.",
    disc_strength_title: "Strength & Power",
    disc_strength_desc: "Free-weight zones, Olympic platforms, and Hammer Strength machinery engineered for maximum hypertrophy and pure output.",
    disc_cardio_title: "Cardio & Stamina",
    disc_cardio_desc: "Rowers, inclined runners, assault bikes, and high-cadence HIIT conditioning to forge an iron engine and burn intense calories.",
    disc_crossfit_title: "CrossFit & WOD",
    disc_crossfit_desc: "Constantly varied high-intensity functional training: Olympic lifting, gymnastics, and metabolic conditioning.",
    disc_boxing_title: "Boxing & Striking",
    disc_boxing_desc: "Heavy bag drills, pad work, head movement, and footwork drills to hone lightning reflexes, power, and mental grit.",
    disc_yoga_title: "Yoga & Mobility",
    disc_yoga_desc: "Dynamic Vinyasa flow, joint decompression, deep core stabilization, and stretching routines to bulletproof against injury.",
    disc_coach_title: "Personal Coaching",
    disc_coach_desc: "One-on-one tailored periodization, detailed biomechanical screening, custom nutrition planning, and guaranteed results.",

    // Planning / Schedule
    schedule_kicker: "WEEKLY TIMETABLE",
    schedule_title: "GROUP CLASS SCHEDULE",
    schedule_subtitle: "Filter by discipline to discover daily classes led by our team of elite certified instructors.",
    filter_all: "All Disciplines",
    filter_crossfit: "CrossFit",
    filter_boxing: "Boxing",
    filter_cardio: "Cardio HIIT",
    filter_yoga: "Yoga & Mobility",
    filter_strength: "Strength & Iron",
    table_head_day: "Day",
    table_head_time: "Time",
    table_head_discipline: "Discipline",
    table_head_coach: "Coach",
    table_head_level: "Level",
    table_head_action: "Booking",
    table_book_btn: "Book Spot",
    table_empty: "No sessions found matching this filter.",

    // Days
    day_monday: "Monday",
    day_tuesday: "Tuesday",
    day_wednesday: "Wednesday",
    day_thursday: "Thursday",
    day_friday: "Friday",
    day_saturday: "Saturday",
    day_sunday: "Sunday",

    // Levels
    level_all: "All Levels",
    level_intermediate: "Intermediate",
    level_advanced: "Advanced",

    // Pricing
    pricing_kicker: "MEMBERSHIP PLANS",
    pricing_title: "CLEAR PRICING, ZERO HIDDEN COSTS",
    pricing_subtitle: "Invest in your health and peak performance today at READY FIT. Transparent rates in FCFA.",
    billing_monthly: "Monthly",
    billing_annual: "Annual (-20%)",
    annual_badge: "2 MONTHS FREE",
    currency_fcfa: "FCFA",
    per_month: "/ month",
    per_year: "/ year",
    plan_popular_badge: "MOST POPULAR",
    plan_basic_title: "BASIC",
    plan_basic_desc: "Ideal for independent athletes focusing on free-weight strength training and open cardio.",
    plan_premium_title: "PREMIUM",
    plan_premium_desc: "Our signature tier: full facility access plus unlimited attendance to all instructor-led group classes.",
    plan_vip_title: "VIP ELITE",
    plan_vip_desc: "The absolute benchmark: custom personal coaching, private recovery lounge, nutrition, and private lockers.",
    plan_btn_select: "Select This Plan",

    // Plan features
    feat_access_gym: "Full open access to gym floor & cardio lab",
    feat_locker: "Secure smart lockers & hot rain showers",
    feat_app: "Workout log & performance tracking mobile app",
    feat_classes: "Unlimited access to all group classes (CrossFit, Boxing, Yoga)",
    feat_assessment: "1 comprehensive biomechanical assessment included",
    feat_guest: "1 free guest pass per month",
    feat_vip_coaching: "4 one-on-one personal coaching sessions / month",
    feat_vip_nutrition: "Customized nutrition plan with bi-weekly updates",
    feat_vip_lounge: "Recovery suite & Finnish sauna access",
    feat_vip_towel: "Complimentary luxury towel & private locker",

    // BMI Calculator
    bmi_kicker: "BIOMETRIC SCREENING",
    bmi_title: "BODY MASS INDEX (BMI) CALCULATOR",
    bmi_subtitle: "Evaluate your physical baseline in seconds to precisely define your body transformation goals.",
    bmi_label_weight: "Body Weight (kg)",
    bmi_placeholder_weight: "e.g. 75",
    bmi_label_height: "Height (cm)",
    bmi_placeholder_height: "e.g. 180",
    bmi_btn_calculate: "Calculate My BMI",
    bmi_result_title: "Your Body Mass Index",
    bmi_result_placeholder: "Enter your weight and height above, then click Calculate.",
    bmi_cat_underweight: "Underweight (< 18.5)",
    bmi_cat_normal: "Normal weight (18.5 - 24.9)",
    bmi_cat_overweight: "Overweight (25.0 - 29.9)",
    bmi_cat_obese: "Obesity (≥ 30.0)",
    bmi_advice_underweight: "READY FIT Advice: Prioritize progressive overload hypertrophy combined with a clean caloric surplus to build lean muscular mass.",
    bmi_advice_normal: "READY FIT Advice: Excellent baseline. Preserve and sharpen your conditioning with a synergy of strength, aerobic power, and joint mobility.",
    bmi_advice_overweight: "READY FIT Advice: Combine our HIIT Cardio and CrossFit sessions to elevate metabolic rate and accelerate body recomposition.",
    bmi_advice_obese: "READY FIT Advice: Personalized coaching and gradual progression will guide you safely through sustainable, injury-free fat loss.",
    bmi_err_invalid: "Please enter valid values (weight between 30 and 300 kg, height between 100 and 250 cm).",

    // Coaches
    coaches_kicker: "THE TECHNICAL STAFF",
    coaches_title: "MEET YOUR ATHLETIC DIRECTORS",
    coaches_subtitle: "Decorated competitors and certified strength specialists committed to biomechanical mastery and physical triumph.",
    coach_1_name: "Marc Mandeng",
    coach_1_role: "Head Coach & Weightlifting",
    coach_1_bio: "Former national weightlifting contender with 10 years of experience in strength conditioning and athletic diagnostics.",
    coach_2_name: "Sarah Bella",
    coach_2_role: "CrossFit & HIIT Specialist",
    coach_2_bio: "CrossFit Level 2 certified, specialized in metabolic conditioning and postural structural balance.",
    coach_3_name: "Kevin Tagne",
    coach_3_role: "Boxing & Striking Champion",
    coach_3_bio: "Experienced striker and sparring partner, teaching ring precision, kinetic punch mechanics, and mental fortitude.",
    coach_4_name: "Audrey Ngono",
    coach_4_role: "Yoga & Mobility Instructor",
    coach_4_bio: "Trained in functional breathwork and fascial mobility to accelerate muscle recovery and joint resilience.",

    // Testimonials
    testimonials_kicker: "DOCUMENTED TRANSFORMATIONS",
    testimonials_title: "THEY CHOSE TO PUSH BEYOND",
    testimonials_subtitle: "Real stories from athletes and members who engineered their strength, health, and mindset at READY FIT.",
    testi_1_quote: "Over 6 months at READY FIT, I shed 14 kg while adding 40 kg to my back squat. The electric environment and high coaching standards altered my entire lifestyle.",
    testi_1_author: "Christian Eboa",
    testi_1_role: "Premium Member for 1 year",
    testi_2_quote: "The Boxing and CrossFit sessions offer unparalleled intensity. The facility is immaculately maintained, the sound system is motivating, and Hammer Strength gear is peerless.",
    testi_2_author: "Vanessa Ngo",
    testi_2_role: "VIP Elite Member",
    testi_3_quote: "The biometric screening and BMI analysis gave me an exact roadmap. Today I am faster, leaner, and more energized in every aspect of my life.",
    testi_3_author: "Patrick Mvondo",
    testi_3_role: "CrossFit Athlete",
    testi_prev_aria: "Previous testimonial",
    testi_next_aria: "Next testimonial",

    // Contact
    contact_kicker: "TAKE COMMAND",
    contact_title: "CONTACT READY FIT CLUB",
    contact_subtitle: "Have questions regarding memberships, training schedules, or facilities? Our concierge responds within 24h or instantly on WhatsApp.",
    contact_form_title: "Send Us a Message",
    contact_form_name_label: "Full Name",
    contact_form_name_placeholder: "e.g. David Miller",
    contact_form_email_label: "Email Address",
    contact_form_email_placeholder: "e.g. david@example.com",
    contact_form_phone_label: "Phone Number",
    contact_form_phone_placeholder: "e.g. 686 94 26 22",
    contact_form_goal_label: "Primary Fitness Goal",
    contact_goal_opt_default: "-- Select your priority --",
    contact_goal_opt_loss: "Weight loss & lean cut",
    contact_goal_opt_muscle: "Muscle hypertrophy & raw power",
    contact_goal_opt_endurance: "Cardiovascular stamina & conditioning",
    contact_goal_opt_boxe: "Boxing & combat fundamentals",
    contact_goal_opt_rehab: "Mobility, flexibility & posture",
    contact_goal_opt_vip: "VIP private high-performance coaching",
    contact_form_msg_label: "Your Message",
    contact_form_msg_placeholder: "Tell us about your expectations, preferred hours, or ask any questions...",
    contact_form_submit: "Submit Inquiry",
    contact_form_sending: "Transmitting...",
    contact_info_title: "Information & Location",
    contact_address_label: "Gym Address:",
    contact_address_val: "Boulevard de la Liberté, Akwa - Opposite Prince de Galles Hotel, Douala",
    contact_phone_label: "Direct Phone:",
    contact_phone_val: "(+237) 686 94 26 22",
    contact_email_label: "Contact Email:",
    contact_email_val: "contact@readyfit-club.com",
    contact_hours_title: "Operating Hours:",
    contact_hours_week: "Monday - Friday: 06:00 AM – 10:00 PM",
    contact_hours_sat: "Saturday: 07:00 AM – 09:00 PM",
    contact_hours_sun: "Sunday & Holidays: 08:00 AM – 06:00 PM",
    contact_map_title: "Club Location",
    contact_map_badge: "Private secured parking 50 bays",

    // Validation messages
    val_err_name: "Please enter your name (at least 2 characters).",
    val_err_email: "Please enter a valid email address.",
    val_err_phone: "Please enter a valid phone number (e.g. 686942622).",
    val_err_goal: "Please choose a primary goal from the list.",
    val_err_msg: "Your message must contain at least 10 characters.",
    val_success_title: "Inquiry successfully submitted!",
    val_success_desc: "Thank you. Our front desk manager will contact you promptly at 686942622 or via WhatsApp message.",
    val_success_whatsapp_action: "Open Directly in WhatsApp",

    // WhatsApp Floating Button
    whatsapp_tooltip: "Chat on WhatsApp",
    whatsapp_prefilled: "Hello READY FIT! I would like more information about membership plans and training schedules.",

    // Footer
    footer_tagline: "The premier athletic conditioning complex. Strength, grit, and enduring victory.",
    footer_col_nav: "Quick Navigation",
    footer_col_hours: "Operating Hours",
    footer_col_social: "Social Media",
    footer_copy: "© 2026 READY FIT. All rights reserved. Forge your legacy.",
    footer_back_top: "Back to top"
  }
};

/**
 * Langue courante ('fr' ou 'en')
 * @type {'fr' | 'en'}
 */
let currentLanguage = 'fr';

/**
 * Récupère une chaîne traduite par sa clé
 * @param {string} key
 * @param {'fr' | 'en'} [lang]
 * @returns {string}
 */
export function t(key, lang = currentLanguage) {
  const dict = translations[lang] || translations.fr;
  if (key in dict) {
    return dict[key];
  }
  // Repli sur le français si non trouvé dans la langue demandée
  if (translations.fr && key in translations.fr) {
    return translations.fr[key];
  }
  return key;
}

/**
 * Retourne la langue actuelle
 * @returns {'fr' | 'en'}
 */
export function getCurrentLang() {
  return currentLanguage;
}

/**
 * Met à jour la langue du site instantanément sans rechargement de page
 * @param {'fr' | 'en'} lang
 */
export function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') {
    lang = 'fr';
  }
  currentLanguage = lang;

  // 1. Sauvegarde dans localStorage (avec protection try/catch)
  try {
    localStorage.setItem('readyfit_lang', lang);
  } catch (err) {
    console.warn("Impossible d'accéder au localStorage :", err);
  }

  // 2. Mise à jour de la balise HTML lang
  document.documentElement.lang = lang;

  // 3. Mise à jour du titre et de la meta description
  const pageTitle = t('meta_title', lang);
  document.title = pageTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t('meta_description', lang));
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', pageTitle);
  }
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', t('meta_description', lang));
  }

  // 4. Mise à jour des boutons de langue
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    const isActive = btnLang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // 5. Mise à jour du DOM statique avec transition en fondu subtile
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key, lang);
    }
  });

  // Placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.setAttribute('placeholder', t(key, lang));
    }
  });

  // Aria-labels
  const ariaElements = document.querySelectorAll('[data-i18n-aria]');
  ariaElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key) {
      el.setAttribute('aria-label', t(key, lang));
    }
  });

  // Alt images
  const altElements = document.querySelectorAll('[data-i18n-alt]');
  altElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (key) {
      el.setAttribute('alt', t(key, lang));
    }
  });

  // Titles
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key) {
      el.setAttribute('title', t(key, lang));
    }
  });

  // 6. Émission d'un événement personnalisé pour les modules JS dynamiques
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { lang, t: (k) => t(k, lang) }
  }));
}

/**
 * Initialise la langue au chargement initial :
 * 1. Vérifie localStorage
 * 2. Sinon détecte navigator.language
 * 3. Défaut : 'fr'
 */
export function initI18n() {
  let initialLang = 'fr';
  try {
    const saved = localStorage.getItem('readyfit_lang');
    if (saved === 'fr' || saved === 'en') {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
      initialLang = 'en';
    }
  } catch (err) {
    console.warn("Erreur détection langue :", err);
  }

  // Écouteur sur les boutons de sélection de langue
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });

  setLanguage(initialLang);
}
