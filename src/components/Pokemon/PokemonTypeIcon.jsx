import BugIcon from '../../assets/svg/BugIcon';
import DarkIcon from '../../assets/svg/DarkIcon';
import DragonIcon from '../../assets/svg/DragonIcon';
import ElectricIcon from '../../assets/svg/ElectricIcon';
import FairyIcon from '../../assets/svg/FairyIcon';
import FightingIcon from '../../assets/svg/FightingIcon';
import FireIcon from '../../assets/svg/FireIcon';
import FlyingIcon from '../../assets/svg/FlyingIcon';
import GhostIcon from '../../assets/svg/GhostIcon';
import GrassIcon from '../../assets/svg/GrassIcon';
import GroundIcon from '../../assets/svg/GroundIcon';
import IceIcon from '../../assets/svg/IceIcon';
import NormalIcon from '../../assets/svg/NormalIcon';
import PoisonIcon from '../../assets/svg/PoisonIcon';
import PsychicIcon from '../../assets/svg/PsychicIcon';
import RockIcon from '../../assets/svg/RockIcon';
import SteelIcon from '../../assets/svg/SteelIcon';
import WaterIcon from '../../assets/svg/WaterIcon';
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