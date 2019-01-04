import zurb from 'foundation-sites/js/foundation';
import skills from './skills-cloud'

const Application = () => {
    const skillsCloud = document.getElementById('skillsCloud');

    if (!skillsCloud)
        return
        
    

    skills.map((value, index) => {
        var a = document.createElement('a');
        a.appendChild(document.createTextNode(`#${value}`));
        a.href = `https://twitter.com/hashtag/${value}`;
        a.target = '_blank';
        a.setAttribute('title', value)
        skillsCloud.appendChild(a);
    })

    
    
}

export default Application;





