import { Badge, USER_DATA } from "./01_ObjectProps";
import { Card } from "./02_function";
import { Children } from "./03_children";
import { Limit } from "./04_CharacterLimit";
import { Light } from "./05_LightSwitch";
import { AdLight } from "./06_AdLightSwitch";
import { Counter } from "./07_Counter";
import { LimitedTextInput } from "./08_LimitedTextInput";
import "./App.css";
import { PasswordInput } from "./09_PasswordInput";
import { MultistepForm } from "./10_MultistepForm";
import { FormBuilder } from "./11_FormBuilder";
import { SearchFilter } from "./12_SearchFilter";
import { Clock } from "./13_Clock";
import { CountryInfo } from "./14_CountryInfo";
import { TextInput } from "./16_TextInput";
import { VideoPlayer } from "./17_VideoPlayer";
import { FieldNotes } from "./18_FieldNotes";
import { ClickOutside } from "./19_ClickOutside";
import { AuthProvider, Main, NavBar } from "./22_Navbar";
import {
  LanguageProvider,
  Greeting,
  LanguageSwitcher,
} from "./23_Translations";
import { TabProvider, TabTrigger, TabContent } from "./24_TabsIntro";
import { Newsfeed, VideoItem, VideoPlaybackProvider } from "./25_Newsfeed";
import { TaskManager, reducer } from "./26_TaskManager";
import { ShoppingCart } from "./27_AddToCart";
import { CounterWithUndoRedo } from "./28_CounterWithUndoRedo";

export default function App() {
  return <CounterWithUndoRedo />;
}
