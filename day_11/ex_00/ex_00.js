async function my_fetch() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    }
}

my_fetch();