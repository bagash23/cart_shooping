import React, {useState, useCallback, useMemo, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Pressable,
  Modal,
  FlatList,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Number from './components/Number ';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timesSpeed, setTimesSpeed] = useState(0);
  const [checkout, setCheckout] = useState([]);

  let textLog = Number;
  if (timesSpeed > 1) {
    textLog = timesSpeed;
  } else if (timesSpeed > 0) {
    textLog = 1;
  }

  // data grid
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Nasi Goreng',
      harga: 20000,
      image:
        'https://cdn0-production-images-kly.akamaized.net/-eH7yCUw-1f_HamKly6LCeaPxa8=/318x0:1598x1280/640x480/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2730143/original/094669300_1550287561-rosalinda222_fried-2509089_1920.JPG',
    },
    {
      id: 2,
      name: 'Sate Ayam',
      harga: 25000,
      image: 'http://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg',
    },
    {
      id: 3,
      name: 'Mie Goreng',
      harga: 15000,
      image:
        'https://cdn0-production-images-kly.akamaized.net/xvY-j6s9LSth2Xpq-HyTdPh0gx4=/673x379/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3129172/original/099632200_1589527804-shutterstock_1455941861.jpg',
    },
    {
      id: 4,
      name: 'Rendang',
      harga: 25000,
      image:
        'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/resep-rendang.jpg',
    },
    {
      id: 5,
      name: 'Sop Buntut',
      harga: 26000,
      image:
        'https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/red-meats-&-red-meat-dishes/oxtail-soup/main-header.jpg',
    },
    {
      id: 6,
      name: 'Gado Gado',
      harga: 15000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/26/Gado_gado_jakarta.jpg',
    },
    {
      id: 7,
      name: 'Soto Ayam',
      harga: 20000,
      image:
        'https://cdn-cas.orami.co.id/parenting/images/soto_ayam_iy3Zxyt.width-800.jpg',
    },
    {
      id: 8,
      name: 'Mie Ayam',
      harga: 15000,
      image:
        'https://sweetrip.id/wp-content/uploads/2020/08/bakmie.liung_116253225_3103649116398196_1993947080121728038_n.jpg',
    },
  ]);

  const handleCheckout = item => {
    let data = [...checkout];
    // for (let i = 1; i <= items.length; i++) {
    //   if (item.id) {
    //     data.push(item);
    //   }
    // }
    // console.log(data);
    data.push(item);
    console.log(data);

    return setCheckout(data);
  };

  console.log(checkout);
  return (
    <View style={styles.container}>
      {/* haeder */}
      <View style={styles.contentHeader}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Vector.png')}
            style={{marginRight: 12}}
          />
          <Image
            source={require('./assets/cari.png')}
            style={{
              position: 'absolute',
              left: 35,
              zIndex: 999,
              width: 20,
              height: 20,
            }}
          />
          <TextInput placeholder="Cari Menu" style={styles.textInput} />
        </View>
      </View>
      {/* grid */}
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 142,
                height: 100,
                resizeMode: 'cover',
              }}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* <Text style={styles.itemHarga}>{item.harga}</Text> */}
              <Number style={styles.itemHarga} value={item.harga} />
              <Text style={{color: '#c4c4c4'}}> / porsi</Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleCheckout(item)}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Order
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* footer */}
      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.contentFooter}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 200,
                  }}>
                  <Image
                    source={require('./assets/fi-br-shopping-bag.png')}
                    style={{width: 20, height: 20}}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 12,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {checkout.map((itemProduk, index) => {
                      return (
                        <View style={{flexDirection: 'row'}} key={index}>
                          <View
                            style={{
                              flexDirection: 'row',
                            }}>
                            {/* <Text style={styles.itemHarga}>
                              {itemProduk.harga}
                            </Text> */}
                            <Number
                              style={styles.itemHarga}
                              value={itemProduk.harga}
                            />
                            <Text style={{color: '#c4c4c4'}}> / porsi</Text>
                          </View>
                        </View>
                      );
                    })}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.footerButton}
                onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Charge
                </Text>
              </TouchableOpacity>
              {/* Modal */}

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView} />
                <View style={styles.modalView}>
                  <View>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Image
                        source={require('./assets/silang.png')}
                        style={{position: 'absolute', right: -10, top: -20}}
                      />
                    </Pressable>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('./assets/dinner.png')}
                        style={{width: 20, height: 20}}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginLeft: 12,
                        }}>
                        Detail Pesanan
                      </Text>
                    </View>

                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        {checkout.map((itemProduk, index) => {
                          return (
                            <View style={{marginTop: 12}} key={index}>
                              <View style={{flexDirection: 'row'}}>
                                <Image
                                  source={{uri: itemProduk.image}}
                                  style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'cover',
                                  }}
                                />
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    marginLeft: 12,
                                  }}>
                                  <View>
                                    <Text style={styles.itemName}>
                                      {itemProduk.name}
                                    </Text>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 12,
                                      }}>
                                      <Number
                                        style={styles.itemHarga}
                                        value={itemProduk.harga}
                                      />
                                      <Text style={{color: '#c4c4c4'}}>
                                        {' '}
                                        / porsi
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                      <Text>x{textLog}</Text>
                    </View>
                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{textTransform: 'capitalize'}}>TOTAL :</Text>
                      {checkout.map((itemProduk, index) => {
                        const jumlahIndex = index + 1;
                        return (
                          <View style={{flexDirection: 'row'}} key={index}>
                            <View
                              style={{
                                flexDirection: 'row',
                              }}>
                              <Number
                                style={styles.itemHarga}
                                value={itemProduk.harga * jumlahIndex * textLog}
                              />
                            </View>
                          </View>
                        );
                      })}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{textTransform: 'capitalize'}}>
                        Uang Dibayar :
                      </Text>
                      {checkout.map((itemProduk, index) => {
                        const jumlahIndex = index + 1;
                        return (
                          <View style={{flexDirection: 'row'}} key={index}>
                            <View
                              style={{
                                flexDirection: 'row',
                              }}>
                              <Number
                                style={styles.itemHarga}
                                value={itemProduk.harga * jumlahIndex * textLog}
                              />
                            </View>
                          </View>
                        );
                      })}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{textTransform: 'capitalize'}}>
                        Uang Kembalian :
                      </Text>
                      {checkout.map((itemProduk, index) => {
                        const jumlahIndex = index * 0;
                        return (
                          <View style={{flexDirection: 'row'}} key={index}>
                            <View
                              style={{
                                flexDirection: 'row',
                              }}>
                              <Number
                                style={styles.itemHarga}
                                value={itemProduk.harga * jumlahIndex * textLog}
                              />
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cetak Struk</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            {/* maping gambar product */}
            {checkout.map((itemProduk, index) => {
              return (
                <View style={{flexDirection: 'row'}} key={index}>
                  <View style={{flexDirection: 'row', padding: 12}}>
                    <Image
                      source={{uri: itemProduk.image}}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'cover',
                      }}
                    />
                    <View style={{flexDirection: 'row', marginLeft: 12}}>
                      <View>
                        <Text style={styles.itemName}>{itemProduk.name}</Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 12,
                          }}>
                          <Number
                            style={styles.itemHarga}
                            value={itemProduk.harga}
                          />
                          <Text style={{color: '#c4c4c4'}}> / porsi</Text>
                        </View>
                      </View>
                      <View style={styles.tambahKurang}>
                        <Pressable
                          style={{backgroundColor: '#14279B', padding: 5}}
                          onPress={() => {
                            setTimesSpeed(current => current + 1);
                          }}>
                          <Image source={require('./assets/tambah.png')} />
                        </Pressable>
                        <View>
                          <Text>{textLog}</Text>
                        </View>
                        <Pressable
                          style={{
                            borderWidth: 1,
                            borderColor: '#14279B',
                            padding: 6,
                            paddingVertical: 9,
                          }}
                          onPress={() => {
                            setTimesSpeed(current => current - 1);
                          }}>
                          <Image source={require('./assets/kurang.png')} />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6ab',
  },
  textInput: {
    backgroundColor: '#F3F5F7',
    paddingHorizontal: 45,
    width: '90%',
    borderRadius: 20,
  },
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 220,
    marginBottom: 60,
    marginTop: 6,
    shadowColor: '#C9CCD5',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
  itemHarga: {
    fontWeight: '700',
    color: '#344CB7',
  },
  button: {
    backgroundColor: '#14279B',
    padding: 12,
    borderRadius: 10,
    margin: 5,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    height: 100,
    borderTopColor: '#c4c4c4',
  },
  contentFooter: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerButton: {
    backgroundColor: '#14279B',
    padding: 12,
    borderRadius: 10,
    width: 100,
  },
  icon_atas: {
    backgroundColor: '#14279B',
    width: 15,
    padding: 5,
    borderRadius: 130 / 2,
    top: -9,
    left: 165,
  },
  tambahKurang: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: 100,
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 5,
    position: 'absolute',
    height: '50%',
    justifyContent: 'space-between',
  },

  buttonClose: {
    backgroundColor: '#14279B',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  swiper: {
    backgroundColor: 'salmon',
    width: 150,
    height: 150,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
