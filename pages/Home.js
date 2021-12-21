import React, { useState, useEffect } from 'react'
import { Alert, FlatList} from 'react-native';
import { getUsers } from '../utils/api';
import { filterInitialValue } from '../utils/initialValues';
import { calculateAge } from '../utils/calculationFuntions';
import Container from '../components/Container';
import { UserCard } from '../components/UserCard';
import { LoadButton } from '../components/LoadButton';
import { FilterComponent } from '../components/UsersFilters';

export default function Home() {
  const [mainUsers, setMainUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ ...filterInitialValue });

  useEffect(() => {
    setIsLoading(true)
    getUsers(page).then(users => {
      if(users.error){
        Alert.alert('Error', 'Something went wrong. Please restart app.');
        return;
      }
      setMainUsers(prev => {
      const modifiedUsers = users.map(user => ({
        ...user,
        age: calculateAge(user.dateOfBirth)
      }))
      setIsLoading(false)
      return [...prev, ...modifiedUsers];
    })})
  }, [page]);

  useEffect(() => setUsers(mainUsers), [mainUsers]);
  useEffect(() => filter(), [filters])

  const changeFilter = (key, value) =>
    setFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[key].value = value;
      return newFilters;
    })

  const clearFilter = () => {
    setFilters(prev => {
      const keys = Object.keys(prev);
      const cleanFilter = { ...prev };
      keys.forEach(key => cleanFilter[key].value = '')
      return cleanFilter
    })
  };

  const filter = () => {
    let filteredUsers = [...mainUsers]
    Object.entries(filters).forEach((value) => {
      const [, filterObj] = value
      const { value: filterValue, filterFn } = filterObj
      if (filterValue) filteredUsers = filteredUsers.filter(user => filterFn(user, filterValue))
    })
    setUsers(filteredUsers)
  }

  return (
    <Container>
      <FlatList
        horizontal={false}
        ListHeaderComponent={<FilterComponent clearFilter={clearFilter} changeFilter={changeFilter} filters={filters}/>}
        numColumns={3}
        columnWrapperStyle={{ marginTop: 16 }}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <UserCard user={item} />
        )}
        ListFooterComponent={() => (
          Object.values(filters).every(filter => !filter.value) && 
          <LoadButton isLoading={isLoading}  onPress={()=>setPage(prev => prev + 1)}/>
        )}
      />
    </Container>
    );
}

