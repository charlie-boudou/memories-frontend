import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../Input';
import InputDate from '../InputDate';
import ButtonUD from './ButtonUpdateDelete';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

export default function CarLocation() {
  const [isEditing, setIsEditing] = useState(true);
  const [inputValues, setInputValues] = useState({
    start: '',
    end: '',
    agency: '',
    notes: '',
  });

  const handleValidation = () => {
    // à compléter
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    setIsEditing(!isEditing);
    // à compléter pour l'envois d'infos
  };

  const handleDelete = () => {
    alert('Delete Action');
    // Mettez en place la logique de suppression ici
  };

  return (
    <View style={tw`w-[90%] m-auto bg-[#f7ebda] rounded-[.625rem] p-2 mt-3`}>
      <View style={tw`flex-row mb-3 items-center justify-between`}>
        <Text style={[tw`font-bold text-[1rem] p-2`, { color: '#073040' }]}>
          Location de voiture
        </Text>
        {isEditing ? (
          <FontAwesome
            name="check"
            color="#073040"
            size={24}
            onPress={handleValidation}
            isEditing={isEditing}
          />
        ) : (
          <ButtonUD
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            isEditing={isEditing}
          />
        )}
      </View>

      <View>
        <View style={tw`flex flex-row justify-between items-start`}>
          <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
            Du
          </Text>
          {!isEditing ? (
            <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
              {inputValues.start}
            </Text>
          ) : (
            <InputDate
            size="small"
            placeholder="Début"
            value={inputValues.start}
            onChangeText={(text) =>
              setInputValues({ ...inputValues, start: text })
            }
            />
          )}
        </View>

        <View style={tw`flex-row justify-between items-start`}>
          <Text style={[tw`text-[1rem] p-2`, { color: '#073040' }]}>au</Text>
          {!isEditing ? (
            <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
              {inputValues.end}
            </Text>
          ) : (
            <InputDate
            size="small"
            placeholder="Fin"
            value={inputValues.end}
            onChangeText={(text) =>
              setInputValues({ ...inputValues, end: text })
            }
            />
          )}
        </View>

        <View style={tw`flex flex-row ${isEditing ? 'justify-around' : 'justify-between'} items-start`}>
          <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
            Agence :
          </Text>
          {!isEditing ? (
            <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
              {inputValues.agency}
            </Text>
          ) : (
            <Input
              size="small"
              placeholder="Nom de l'agence"
              value={inputValues.agency}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, agency: text })
              }
            />
          )}
        </View>

        <View style={tw`flex-row ${isEditing ? 'justify-around' : 'justify-between'}  items-start`}>
          <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
            Notes :
          </Text>
          {!isEditing ? (
            <Text style={[tw`text-[0.9rem] p-2`, { color: '#073040' }]}>
              {inputValues.notes}
            </Text>
          ) : (
            <Input
            size="small"
            placeholder="Commentaire"
            value={inputValues.notes}
            onChangeText={(text) =>
              setInputValues({ ...inputValues, notes: text })
            }
            multiline
            />
          )}
        </View>
      </View>
    </View>
  );
}
