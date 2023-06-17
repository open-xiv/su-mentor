interface Instance {
    id: number;
    name: string;
    level: number;
}

interface Job {
    id: number;
    name: string;
    gauge: string;
}

interface Meta {
    instances: Instance[];
    jobs: Job[];
}

interface Oper {
    op_code: string;
    timestamp: number;
}

interface Area {
    op: Oper;
    instance: Instance;
}

interface Player {
    op: Oper;
    id: string;
    name: string;
    job: Job;
    level: number;
}

interface FightRecord {
    area: Area;
    players: Player[];
    pretty: boolean;
    useful: boolean;
}

interface NotionConfig {
    block_id: string;
    token: string;
}

interface SuConfig {
    token: string;
}

interface CeresConfig {
    notion: NotionConfig;
    su: SuConfig;
}