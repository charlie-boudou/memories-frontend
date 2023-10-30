import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import tw from 'twrnc';
import ButtonLarge from '../ButtonLarge';
import Header from '../Header';
import SelectListing from './SelectListingModal';
import AccomodationCard from './AccomodationCard';
import FlightCard from './FlightCard';
import CarRentalCard from './CarRentalCard';
import OtherCard from './OtherCard';
import ButtonUD from './ButtonUpdateDelete';
import InputHour from './InputHour';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initPlanning, addPlanning } from '../../reducers/planning';

const ROUTE_BACK = 'http://192.168.1.13:3000';

export default function Planning({ isDairyActive, setIsDairyActive, travel }) {
  const [edit, setEdit] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); // récupérer l'option validé de la modal

  const dispatch = useDispatch();
  const planning = useSelector((state) => state.planning.value);

  const onClick = () => {
    setEdit(!edit);
  };

  // affichage de la modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // ajout d'une nouvelle info voyage
  const addInfos = (val) => {
    dispatch(addPlanning({ category: val, data: [{}] }));
    setSelectedOption(val);
    toggleModal();
  };

  console.log('planning from planning', planning);

  return (
    <View style={tw`bg-[#F2DDC2] w-full h-full`}>
      <Header
        title={travel.destination}
        id={travel._id}
        isDairyActive={isDairyActive}
        setIsDairyActive={setIsDairyActive}
      />
      <View /*style={tw`w-full h-[90%] flex items-center justify-center`}*/>
        <ButtonLarge title="Commencer mon programme" onClick={toggleModal} />
      </View>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View
          style={tw`flex h-full justify-center items-center bg-opacity-50 bg-black`}
        >
          <SelectListing addInfos={addInfos} toggleModal={toggleModal} />
        </View>
      </Modal>
      {selectedOption === 'Location de voiture' && <CarRentalCard />}
      {selectedOption === "Billet d'avion" && <FlightCard />}
      {selectedOption === 'Logement' && <AccomodationCard />}
      {selectedOption === 'Autre' && <OtherCard />}
    </View>
  );
}

const styles = StyleSheet.create({});
