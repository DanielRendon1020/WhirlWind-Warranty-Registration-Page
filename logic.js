function createWarrantyPage(){
    let element;
    let label;

    element = document.createElement('h1')
    element.textContent = 'Warranty Information'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'First Name'
    document.body.appendChild(label)

    element = document.createElement('input')
    element.setAttribute('type', 'text')
    document.body.appendChild(element)

    element = document.createElement('label')
    element.innerHTML = 'Last Name'
    document.body.appendChild(element)
 
    element = document.createElement('input')
    element.setAttribute('type', 'text')
    document.body.appendChild(element)

    element = document.createElement('label')
    element.innerHTML = 'Company Name'
    document.body.appendChild(element)
 
    element = document.createElement('input')
    element.setAttribute('type', 'text')
    document.body.appendChild(element)

    element = document.createElement('label')
    element.innerHTML = 'Email'
    document.body.appendChild(element)
 
    element = document.createElement('input')
    element.setAttribute('type', 'text')
    document.body.appendChild(element)
}
