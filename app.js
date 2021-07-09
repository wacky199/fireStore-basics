const cafeList=document.querySelector('#cafe-list');

//create element and render cafe

db.collection('listedCafes')
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            console.log(doc.data());
        });
    });
