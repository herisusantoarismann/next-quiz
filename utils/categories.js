import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SchoolIcon from "@mui/icons-material/School";
import TerrainIcon from "@mui/icons-material/Terrain";
import HistoryIcon from "@mui/icons-material/History";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ScienceIcon from "@mui/icons-material/Science";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SportsIcon from "@mui/icons-material/Sports";

const categories = [
  {
    name: "Arts & Literature",
    query: "arts_and_literature",
    icon: <ImagesearchRollerIcon />,
  },
  {
    name: "Film & TV",
    query: "film_and_tv",
    icon: <LiveTvIcon />,
  },
  {
    name: "Food & Drink",
    query: "food_and_drink",
    icon: <FastfoodIcon />,
  },
  {
    name: "General Knowledge",
    query: "general_knowledge",
    icon: <SchoolIcon />,
  },
  {
    name: "Geography",
    query: "geography",
    icon: <TerrainIcon />,
  },
  {
    name: "History",
    query: "history",
    icon: <HistoryIcon />,
  },
  {
    name: "Music",
    query: "music",
    icon: <MusicNoteIcon />,
  },
  {
    name: "Science",
    query: "science",
    icon: <ScienceIcon />,
  },
  {
    name: "Society & Culture",
    query: "society_and_culture",
    icon: <ConnectWithoutContactIcon />,
  },
  {
    name: "Sport & Leisure",
    query: "sport_and_leisure",
    icon: <SportsIcon />,
  },
];

export { categories };
