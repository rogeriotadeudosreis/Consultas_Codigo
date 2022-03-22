/**
 * Exemplo de arquivo resolver para ser implementado em qualquer projeto angular 
 * Motivação: carregar os dados antes da renderização do componente no template 
 */

@Injectable({ providedIn: 'root'})
export class UserListResolver implements Resolve<Observable<User[]>> {

    constructor(private service: UserService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]>{
        const userName = route.params.userName;
        return this.service.listFromUser(userName);
    }
}

/**
 * configurar o resolve dentro do arquivo routing.module.ts
 */

resolve: {
    users: UserListResolver
}

/**
 * no componente dentro do init chamar da seguinte forma
 */

users: User[] = [];

this.users = this.activatedRoute.snapshot.data.users; ou 
this.users = this.activatedRoute.snapshot.data['users'];