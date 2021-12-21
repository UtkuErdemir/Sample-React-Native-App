export const filterInitialValue = {
    name: {
      value: "",
      filterFn: (user,value) => user.firstName.includes(value) || user.lastName.includes(value) || `${user.firstName} ${user.lastName}`.includes(value)
    },
    gender: {
      value: "",
      filterFn: (user,value) => user.gender === value
    },
    location: {
      value: "",
      filterFn: (user,value) => user.location.city.includes(value) || user.location.country.includes(value) || `${user.location.city}, ${user.location.country}`.includes(value)
    },
    age: {
      value: "",
      filterFn: (user,value) => user.age === value
    },
  }

export const ageList = [...Array.from({length: 82}, (_, i) => i + 1).map(v=>v+17)];

export const genders = ['male','female']

export const errorResponse = {error:true, data:null};