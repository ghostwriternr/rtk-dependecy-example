export interface PokemonResponse {
    abilities: Ability2[];
    base_experience: number;
    forms: Ability[];
    game_indices: Gameindex[];
    height: number;
    held_items: Helditem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Ability;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

interface Type {
    slot: number;
    type: Ability;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: Ability;
}

interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: Other;
    versions: Versions;
}

interface Versions {
    "generation-i": Generationi;
    "generation-ii": Generationii;
    "generation-iii": Generationiii;
    "generation-iv": Generationiv;
    "generation-v": Generationv;
    "generation-vi": Generationvi;
    "generation-vii": Generationvii;
}

interface Generationvii {
    "ultra-sun-ultra-moon": Omegarubyalphasapphire;
}

interface Generationvi {
    "omegaruby-alphasapphire": Omegarubyalphasapphire;
    "x-y": Omegarubyalphasapphire;
}

interface Omegarubyalphasapphire {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface Generationv {
    "black-white": Diamondpearl;
}

interface Generationiv {
    "diamond-pearl": Diamondpearl;
    "heartgold-soulsilver": Diamondpearl;
    platinum: Diamondpearl;
}

interface Diamondpearl {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface Generationiii {
    emerald: Emerald;
    "firered-leafgreen": Crystal;
    "ruby-sapphire": Crystal;
}

interface Emerald {
    front_default: string;
    front_shiny: string;
}

interface Generationii {
    crystal: Crystal;
    gold: Crystal;
    silver: Crystal;
}

interface Crystal {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

interface Generationi {
    "red-blue": Redblue;
    yellow: Redblue;
}

interface Redblue {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

interface Other {
    dream_world: Dreamworld;
    "official-artwork": Officialartwork;
}

interface Officialartwork {
    front_default: string;
}

interface Dreamworld {
    front_default: string;
    front_female?: any;
}

interface Move {
    move: Ability;
    version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
    level_learned_at: number;
    move_learn_method: Ability;
    version_group: Ability;
}

interface Helditem {
    item: Ability;
    version_details: Versiondetail[];
}

interface Versiondetail {
    rarity: number;
    version: Ability;
}

interface Gameindex {
    game_index: number;
    version: Ability;
}

interface Ability2 {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

interface Ability {
    name: string;
    url: string;
}
