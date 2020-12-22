const person = {
    uid: 'ABDCDE',
    username: 'hermit0',
    name: 'Edgar Campos',
    age: 30,
    email: 'edgargcg@gmail.com'
};

const { uid: id, name, age } = person;
console.log(id, name, age);

const getPerson = ({name, phone = 0}) => {
    console.log(`Hola, ${name} - ${phone}`);

    return {
        keyName: name,
        birthday: '2020-05-16',
        latlng:{
            lat: 5,
            lng: 100
        }
    };
}
const { keyName, birthday, latlng:{ lat, lng} } = getPerson(person);
console.log(keyName, birthday);
console.log(lat, lng)