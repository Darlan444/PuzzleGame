document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    for (var i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
});