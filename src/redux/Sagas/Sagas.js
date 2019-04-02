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

      const allUserData = yield payload.success.map(x => ({
        //id: x.id,
        // employee_number: x.employee_number,
        first_name: x.first_name,
        last_name: x.last_name,
        //  job_title: x.job_title,
        email: x.email,
        phish_prone_percentage: x.phish_prone_percentage,
        /*  phone_number: x.phone_number,
        extension: x.extension,
        mobile_phone_number: x.mobile_phone_number,
        location: x.location,
        division: x.division,
        manager_name: x.manager_name, */
        manager_email: x.manager_email,
        groups: x.groups
        /*    adi_manageable: x.adi_manageable,
        joined_on: x.joined_on,
        last_sign_in: x.last_sign_in,
        status: x.status,
        employee_start_date: x.employee_start_date,
        archived_at: x.archived_at,
        custom_field_1: x.custom_field_1,
        custom_field_2: x.custom_field_2 */
      }));

      console.log(
        "Knowbe4 Websocket: 'KnowBe4UserData' Errors: ",
        payload.errors
      );
      yield put({
        type: types.SET_ALL_USERS,
        AllUsers: payload.success,
        allUserData: allUserData
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
