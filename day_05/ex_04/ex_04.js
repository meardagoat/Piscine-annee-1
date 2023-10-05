window.onload = function() {
    const exclusiveLabel = document.getElementById('tag');

    if (exclusiveLabel) {
        exclusiveLabel.parentNode.removeChild(exclusiveLabel);
    }
}

