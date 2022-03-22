/**
 * Paginação de dados 
 * 
 * Motivação: trazer os dados conforme necessidade do usuário e não congestionar a página
 * 
 * Para isso precisamos fazer as seguintes alteração no método list
 */ 
  
  listFromUserPaginated(userName: string, page: number){
  const params = new HttpParams()
  .append('page', page.toString());
  
  return this.http
  .get<User[]>(API + '/'  + userName + '/users', {params} )
  }