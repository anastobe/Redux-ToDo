import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect, useDispatch } from 'react-redux'
import { setValue } from '../../stores/actions/user.action'

const Home = ({ navigation, user, ...props }) => {

  const[dataToDo, setdataToDo] = useState(null);

  const saveToDoData = () =>{
    props.setValue(dataToDo)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={[styles.outerWrapper, { margin: 20 } ]}>

        <View >

          <View>  
            <TextInput value={dataToDo} onChangeText={(e)=> setdataToDo(e)}  style={{ borderColor: "#000", borderWidth: 2 }} />
          </View>
          <TouchableOpacity onPress={()=> saveToDoData() }>
           <Icon style={{alignSelf: 'center' }} name={'add-sharp'} size={30} color={'purple'} />
          </TouchableOpacity>
          
          <View>  
             <Text>{user}</Text>
          </View>

        </View>

        
        </View>
      </SafeAreaView>
    </>
  )
}

//data laata ha
const mapStateToProps = state => {
  return {
    user: state.userReducer.data
  }
}

//data action ma save krwata ha
const mapDispatchToProps = {
  setValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

















// import React, { useState } from 'react'
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   TextInput
// } from 'react-native'
// import styles from './Home.style'
// import Icon from 'react-native-vector-icons/Ionicons'

// import { connect, useDispatch } from 'react-redux'
// import { setValue } from '../../stores/actions/user.action'

// const Home = ({ navigation, user, ...props }) => {

//   const[dataToDo, setdataToDo] = useState(null);



//   const saveToDoData = () =>{
//     props.setValue( 
//       "dataToDo", dataToDo,
//       )

//   }

//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
//       <SafeAreaView style={styles.SafeAreaView1} />
//       <SafeAreaView style={styles.SafeAreaView2}>
//         <View style={[styles.outerWrapper, { margin: 20 } ]}>

//         <View >

//           <View>  
//             <TextInput value={dataToDo} onChangeText={(e)=> setdataToDo(e)}  style={{ borderColor: "#000", borderWidth: 2 }} />
//           </View>
//           <TouchableOpacity onPress={()=> saveToDoData() }>
//            <Icon style={{alignSelf: 'center' }} name={'add-sharp'} size={30} color={'purple'} />
//           </TouchableOpacity>
          
//           <View>  
//              <Text>{dataToDo}</Text>
//           </View>

//         </View>

        
//         </View>
//       </SafeAreaView>
//     </>
//   )
// }

// //data laata ha
// const mapStateToProps = state => {
//   return {
//     user: state.userReducer.dataToDo
//   }
// }

// //data action ma save krwata ha
// const mapDispatchToProps = {
//   setValue
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
