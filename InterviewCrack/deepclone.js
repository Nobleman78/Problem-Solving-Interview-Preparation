function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        clone[key] = deepClone(obj[key]); 
    }

    return clone; 
}

// Example usage:
const original = {
    name: "Jesmin",
    age: 25,
    hobbies: ["coding", "reading"],
    address: {
        city: "Dhaka",
        zip: 1230
    }
};

const copy = deepClone(original);
console.log(copy);
