const getArr = userParam => {
    const searchParams = new URLSearchParams({
        key: '44080035-ad15b59279a4b32b32cca2a53',
        q: userParam,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};

export default getArr;