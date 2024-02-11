import emailjs from 'emailjs-com';

export const useEmail = () => {
  const sendEmail = (formType, formData) => {
    console.log(formData);
    const newFormData = new FormData(formData);

    const templateParams = {
      신청종류: formType == 'lecture' ? '시범강의신청' : '상담신청',
      학생명: newFormData.get('name') || '',
      신청자: newFormData.get('rel') || '',
      번호: newFormData.get('phone') || '',
      지역: newFormData.get('location') || '',
      학교: newFormData.get('school') || '',
      신청과목: newFormData.get('object') || '',
      상담내용: newFormData.get('content') || '',
    };

    emailjs.send('service_epa6mea', 'template_5brwbg9', templateParams, 'qWAhaHkSLVQFEsy10').then(
      result => {
        alert('상담신청이 완료되었습니다.');
      },
      error => {
        alert('오류가 발생했습니다.');
      },
    );
  };

  return [sendEmail];
};
