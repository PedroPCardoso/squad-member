import { ClientsService } from './clients.service';
export declare class ClientsController {
    private clientService;
    constructor(clientService: ClientsService);
    getClients(): Promise<string[]>;
}
