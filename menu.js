<script>
    function openSection(event, sectionId) {
        // 1. Скрываем все секции с контентом
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // 2. Убираем класс 'active' у всех кнопок
        const buttons = document.querySelectorAll('.menu-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // 3. Показываем нужную секцию
        document.getElementById(sectionId).classList.add('active');

        // 4. Добавляем класс 'active' кнопке, на которую нажали
        event.currentTarget.classList.add('active');
    }
</script>