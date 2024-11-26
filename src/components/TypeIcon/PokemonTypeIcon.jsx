import BugIcon from './svg/BugIcon';
import DarkIcon from './svg/DarkIcon';
import DragonIcon from './svg/DragonIcon';
import ElectricIcon from './svg/ElectricIcon';
import FairyIcon from './svg/FairyIcon';
import FightingIcon from './svg/FightingIcon';
import FireIcon from './svg/FireIcon';
import FlyingIcon from './svg/FlyingIcon';
import GhostIcon from './svg/GhostIcon';
import GrassIcon from './svg/GrassIcon';
import GroundIcon from './svg/GroundIcon';
import IceIcon from './svg/IceIcon';
import NormalIcon from './svg/NormalIcon';
import PoisonIcon from './svg/PoisonIcon';
import PsychicIcon from './svg/PsychicIcon';
import RockIcon from './svg/RockIcon';
import SteelIcon from './svg/SteelIcon';
import WaterIcon from './svg/WaterIcon';
import { CircleHelpIcon } from "lucide-react";

const typeIcons = {
    'normal': NormalIcon,
    'fighting': FightingIcon,
    'flying': FlyingIcon,
    'poison': PoisonIcon,
    'ground': GroundIcon,
    'rock': RockIcon,
    'bug': BugIcon,
    'ghost': GhostIcon,
    'steel': SteelIcon,
    'fire': FireIcon,
    'water': WaterIcon,
    'grass': GrassIcon,
    'electric': ElectricIcon,
    'psychic': PsychicIcon,
    'ice': IceIcon,
    'dragon': DragonIcon,
    'dark': DarkIcon,
    'fairy': FairyIcon
};

const PokemonTypeIcon = ({ name, ...props }) => {
    const TargetedIcon = typeIcons[name];

    if (!TargetedIcon) return <CircleHelpIcon {...props}/>;

    return <TargetedIcon {...props}/>;
};

export default PokemonTypeIcon;