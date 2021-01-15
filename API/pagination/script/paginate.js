const paginate = (followers) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate


/* 

let i = 0;
let index = 0;
var numbers = [65, 44, 12, 4];
numbers.map((i,index)=> {return {i,index}})
output:
0: {i: 65, index: 0}
1: {i: 44, index: 1}
2: {i: 12, index: 2}
3: {i: 4, index: 3}

Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

Array.from( [1, 2, 3], (i, index) => {
    return { i, index } 
})
output : 
0: {i: 1, index: 0}
1: {i: 2, index: 1}
2: {i: 3, index: 2}

*/