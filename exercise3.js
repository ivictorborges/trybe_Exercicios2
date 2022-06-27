const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const containsA = (names) => {
    return names.reduce((acc, curr) => 
    acc + curr.split('').reduce((sum, letter) => {
        if (letter === 'a' || letter === 'A') return sum + 1;
        return sum;
    },0)
    ,0)
  }
  console.log(containsA(names));