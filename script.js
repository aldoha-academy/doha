document.addEventListener('DOMContentLoaded', function() {
    const langArButton = document.getElementById('lang-ar');
    const langEnButton = document.getElementById('lang-en');
    const body = document.body;
    const allElementsWithLang = document.querySelectorAll('[data-lang]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const header = document.querySelector('header'); // Get the header element
    const headerHeight = header.offsetHeight; // Calculate the header height

    // بيانات النصوص المترجمة
    const translations = {
        'ar': {
            'about_academy': 'عن الأكاديمية',
            'academy_aldoha': 'أكاديمية الضحى',
            'our_vision': 'رؤيتنا',
            'our_mission': 'رسالتنا',
            'our_goals': 'أهدافنا',
            'quran_kareem': 'قرآن كريم',
            'ijazat': 'إجازات بسند متصل',
            'tajweed': 'تجويد',
            'noorania': 'قاعدة نورانية',
            'noor_al_bayan': 'نور البيان',
            'correction_recitation': 'تصحيح تلاوة',
            'tohafat_atfal': 'تحفة الأطفال',
            'jazaria': 'الجزرية',
            'arabic_language': 'لغة عربية',
            'contact_us': 'تواصل معنا',
            'facebook_page': 'صفحتنا على الفيس بوك',
            'book_free_lesson': 'احجز محاضرة مجانية',
            'academy_text': 'نص تعريفي عن أكاديمية الضحى وأهميتها في تعليم القرآن للأطفال.',
            'vision_text': 'نص مقترح لرؤية الأكاديمية الطموحة في مجال التعليم الديني عن بعد.',
            'mission_text': 'نص مقترح لرسالة الأكاديمية السامية في نشر علوم القرآن واللغة العربية.',
            'goals_list': [
                'هدف مقترح للأكاديمية.',
                'هدف آخر لتعزيز العملية التعليمية.',
                'هدف يتعلق بتطوير المناهج.'
            ],
            'our_programs': 'برامجنا',
            'whatsapp_link': 'تواصل عبر واتساب',
            'contact_us': 'تواصل معنا',
            'facebook_page_link': 'صفحتنا على الفيسبوك'
        },
        'en': {
            'about_academy': 'About Al-Doha Academy',
            'academy_aldoha': 'Al-Doha Academy',
            'our_vision': 'Our Vision',
            'our_mission': 'Our Mission',
            'our_goals': 'Our Goals',
            'quran_kareem': 'Quran Kareem',
            'ijazat': 'Ijazat with Continuous Sanad',
            'tajweed': 'Tajweed',
            'noorania': 'Noorania Rule',
            'noor_al_bayan': 'Noor Al-Bayan',
            'correction_recitation': 'Correction of Recitation',
            'tohafat_atfal': 'Tohfat Al-Atfal',
            'jazaria': 'Al-Jazaria',
            'arabic_language': 'Arabic Language',
            'contact_us': 'Contact Us',
            'facebook_page': 'Our Facebook Page',
            'book_free_lesson': 'Book a Free Lesson',
            'academy_text': 'Introductory text about Al-Doha Academy and its importance in teaching the Quran to children.',
            'vision_text': 'Suggested text for the academy\'s ambitious vision in the field of distance religious education.',
            'mission_text': 'Suggested text for the academy\'s noble mission in spreading the sciences of the Quran and the Arabic language.',
            'goals_list': [
                'Suggested goal for the academy.',
                'Another goal to enhance the educational process.',
                'A goal related to curriculum development.'
            ],
            'our_programs': 'Our Programs',
             'whatsapp_link': 'Contact via WhatsApp',
            'contact_us': 'Contact Us',
            'facebook_page_link': 'Our Facebook Page'
        }
    };

    // Function to update text based on selected language
    function updateText(lang) {
        allElementsWithLang.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = translations[lang][key];
            if (translation) {
                if (element.tagName === 'UL') {
                    element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
                } else if (element.tagName === 'A' && key === 'facebook_page_link') {
                    element.href = 'https://facebook.com';
                }
                 else if (element.tagName === 'A' && key === 'whatsapp_link') {
                    element.href = 'https://wa.me/1234567890';
                }
                else {
                    element.textContent = translation;
                }
            }
        });
        // Update direction for body
        body.classList.toggle('en', lang === 'en');
    }

    // Event listeners for language buttons
    langArButton.addEventListener('click', () => {
        updateText('ar');
        localStorage.setItem('preferredLanguage', 'ar');
         document.querySelector('html').setAttribute('lang', 'ar');
        langArButton.classList.add('active');
        langEnButton.classList.remove('active');
    });

    langEnButton.addEventListener('click', () => {
        updateText('en');
        localStorage.setItem('preferredLanguage', 'en');
         document.querySelector('html').setAttribute('lang', 'en');
        langEnButton.classList.add('active');
        langArButton.classList.remove('active');
    });

    // Load preferred language from localStorage
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage === 'en') {
        langEnButton.click();
    } else {
        langArButton.click(); // Default to Arabic
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the top position of the target element relative to the document
                let targetOffsetTop = targetElement.offsetTop;
                
                // Adjust for the header height
                //targetOffsetTop += headerHeight;
		  targetOffsetTop -= headerHeight;
                window.scrollTo({
                    top: targetOffsetTop ,
                    behavior: 'smooth'
                });
            }
        });
    });
});
