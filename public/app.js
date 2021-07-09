const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
const msg = document.querySelector('.msg');


//create element and render cafe
const renderCafe = (doc) => {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);
    // delete item
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('listedCafes').doc(id).delete();
    });
};

// getting data
// db.collection('listedCafes').where('city','==','meerut').orderBy('name')
//     .get()
//     .then((snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             renderCafe(doc);
//         });
//     });



// realtime listener: whenever there gotta be any change such as some 
// cafe is being added or remove it will refelect in real time
db.collection('listedCafes')
    .orderBy('name')
    .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
            if (change.type == 'added') {
                renderCafe(change.doc);
            } else if (change.type == 'removed') {
                let li = cafeList.querySelector(
                    '[data-id=' + change.doc.id + ']'
                );
                cafeList.removeChild(li);
            }
        });
    });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('listedCafes').add({
        name: form.name.value,
        city: form.city.value,
    });
    form.name.value = '';
    form.city.value = '';
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 1200);
});
