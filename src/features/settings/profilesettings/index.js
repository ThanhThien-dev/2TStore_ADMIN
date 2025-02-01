import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";

function ProfileSettings() {
  const dispatch = useDispatch();

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Đã cập nhật", status: 1 }));
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType);
  };

  return (
    <>
      <TitleCard title="Cài đặt hồ sơ" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Họ tên"
            defaultValue="Thanh Thiện"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email"
            defaultValue="logsik@gmail.com"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Công việc"
            defaultValue="IT Developer"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Quốc gia"
            defaultValue="Việt Nam"
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Giới thiệu"
            defaultValue="Doing what I love, part time traveller"
            updateFormValue={updateFormValue}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Ngôn ngữ"
            defaultValue="Tiếng Việt"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Múi giờ"
            defaultValue="VN"
            updateFormValue={updateFormValue}
          />
          <ToogleInput
            updateType="syncData"
            labelTitle="Đồng bộ"
            defaultValue={true}
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Cập nhật
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
