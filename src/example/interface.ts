interface INameInfo {
  firstName: string;
  lastName: string;
}
const getFullName= ({firstName, lastName}: INameInfo) => {
  return `${firstName} ${lastName}`;
}

getFullName({
  firstName: 'jasmine',
  lastName: 'www'
})

