document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
 
        function filterProjects(category) {
        for (var i = 0; i < projects.length; i++) {
            const project = projects[i]; 
            const projectCategories = project.getAttribute('data-category'); 
            
            let shouldShow = false; 
            
            if (category === 'all') {
                shouldShow = true;
            } else if (projectCategories) {

                if (projectCategories.indexOf(category) > -1) {
                    shouldShow = true;
                }
            }        
            if (shouldShow) {
                project.style.display = 'block';
                project.classList.add('fade-in');
            } else {
                project.style.display = 'none';
                project.classList.remove('fade-in');
            }
        }
    }
    for (var y = 0; y < filterButtons.length; y++) {
        const button = filterButtons[y]; 
        
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter'); 
            for (var z = 0; z < filterButtons.length; z++) {
                filterButtons[z].classList.remove('active');
            }
            this.classList.add('active');
            filterProjects(filterValue);
        });
    }
    filterProjects('all');
});