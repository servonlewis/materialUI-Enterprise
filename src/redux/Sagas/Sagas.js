import {
  call,
  put,
  takeEvery,
  takeLatest,
  take,
  all,
  fork,
  actionChannel,
  select
} from "redux-saga/effects";
import axios from "axios";
import { me } from "./selectors";
import types from "../Actions/Types";
import { delay, eventChannel } from "redux-saga";
import socketIOClient from "socket.io-client";
const socketConfig = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
  secure: true,
  reconnect: true,
  rejectUnauthorized: false
};
const endpoint = "http://10.160.116.112:5052";

const connect = () => {
  const socket = socketIOClient(endpoint, socketConfig);
  return new Promise(resolve => {
    socket.on("connect", () => {
      resolve(socket);
    });
  });
};

const mySocketChannel = socket =>
  eventChannel(emit => {
    const handler = data => emit(data);

    socket.on("KnowBe4UserData", handler);
    return () => socket.disconnect();
  });

function* knowBe4Users() {
  const Channel = yield actionChannel("GET_USERS");
  while (true) {
    try {
      yield take(Channel);
      // connect to the server
      const socket = yield call(connect);

      // then create a socket channel
      const socketChannel = yield call(mySocketChannel, socket);

      //send Action to server
      yield socket.emit("KnowBe4UserData");

      // then put the new data into the reducer
      const payload = yield take(socketChannel);
      console.log(payload.success);
      console.log("Knowbe4 Errors: ", payload.errors);
      yield put({
        type: types.SET_ALL_USERS,
        AllUsers: payload.success
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default function* rootFunction() {
  //yield takeLatest("GET_USER", fetchCitrixDesktops);
  yield all([knowBe4Users()]);
}

/* function* fetchCitrixDesktops(action) {
  try {
    const myUserName = yield call(
      axios.get,
      ` /api/dms/userInfo/?name=${action.data}`
    );

    const [userResourceCitrix] = yield all([
      call(
        axios.get,
        ` /api/dms/userResourceCitrix/?name=${myUserName.data.Name}`
      )
    ]);

    yield put({
      type: types.GET_USER_CITRIX_DESKTOPS,
      userResourceCitrix: userResourceCitrix.data
    });
  } catch (err) {
    console.log(err);
  }
}

function* confRoomActionChannel() {
  const removeConfRoomChan = yield actionChannel("REMOVE_CONFROOM");
  try {
    while (true) {
      const {} = yield take(removeConfRoomChan);
    }
  } catch (err) {
    console.log(err);
  }
} */
