// import {useState} from 'react';

// import {postCart} from '../../api/cart';

// import type {TablesInsert} from '@/app/types/supabase';

// import {apiSignIn, apiSignUp, getUser, setUserData} from '@/app/src/api/auth';

// export default function useSign(formType: 'simple' | 'detail') {
//   // const [signType, setSignType] = useState(SignTypeDefault);

//   const [name, setName] = useState('');
//   const [rel, setRel] = useState('p');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [school, setSchool] = useState('');
//   const [consult, setConsult] = useState('');
//   const [infoAgree, setInfoAgree] = useState(false);
//   const [object, setObject] = useState('');
//   const [error, setError] = useState<null | string>(null);

//   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//   };
//   const onChangeRel = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRel(e.target.value);
//   };
//   const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhone(e.target.value);
//   };
//   const onChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLocation(e.target.value);
//   };
//   const onChangeSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSchool(e.target.value);
//   };
//   const onChangeConsult = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setConsult(e.target.value);
//   };
//   const onChangeObjcet = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setObject(e.target.value);
//   };
//   const onChangeInfoAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInfoAgree(prev => !prev);
//   };

//   const resetInput = (formType: string) => {
//     if (formType == 'detail') {
//       setRel('p');
//       setLocation('');
//       setSchool('');
//     } else {
//       setObject('');
//     }
//     setName('');
//     setPhone('');
//     setConsult('');
//     setInfoAgree(false);
//   };

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (name.replaceAll(' ', '') === '') return setError('성함을 입력해주세요');
//     if (phone.replaceAll(' ', '') === '') return setError('번호를 입력해주세요');
//     if (!infoAgree) return setError('개인정보이용약관에 동의해주세요');

//     if (formType === 'detail') {
//       // name, rel, phone, location, school, consult를 포함해 email전송
//     } else if (signType === 'simple') {
//       // name, phone, consult를 포함해 email 전송
//     }
//     resetInput(formType);
//   };

//   const SignUp = async (email: string, password: string) => {
//     const {data, error} = await apiSignUp({email, password});
//     if (error) {
//       return error;
//     }
//     if (data) {
//       const {id: user_id, email} = data.user;
//       await setUserData({user_id, email});
//       await postCart({user_id});
//       alert('회원가입이 완료되었습니다.');
//     }
//   };

//   const SignIn = async (email: string, password: string) => {
//     const {data, error} = await apiSignIn({email, password});
//     if (error) {
//       return error;
//     }
//     if (data) {
//       const user_id = data.session.user.id;
//       const userData = await getUser(user_id);
//       if (!userData) {
//         const userData: TablesInsert<'users'> = {
//           user_id,
//           email,
//         };
//         await setUserData(userData);
//         setSession(await getUser(user_id));
//       } else {
//         setSession(userData);
//       }
//     }
//   };

//   return {
//     oppositeSignType,
//     onSubmit,
//     onChangeEmail,
//     onChangePassword,
//     onChangePasswordConfirm,
//     email,
//     password,
//     passwordConfirm,
//     error,
//   };
// }
