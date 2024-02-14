import emailjs from 'emailjs-com';

export const useEmail = () => {
  const sendEmail = (formType:any, formData:any) => {
    const apiKey = process.env.NEXT_PUBLIC_EMAIL_API_KEY as string
    const templateKey = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY as string
    const serviceKey = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY as string
    const newFormData = new FormData(formData);

    const templateParams = {
      신청종류: formType == 'lecture' ? '시범강의신청' : '상담신청',
      학생명: newFormData.get('name') || '',
      신청자: newFormData.get('rel') || '',
      번호: newFormData.get('phone') || '',
      지역: newFormData.get('location') || '',
      학교: newFormData.get('school') || '',
      신청과목: newFormData.get('subject') || '',
      상담내용: newFormData.get('content') || '',
    };

    emailjs.send(serviceKey, templateKey, templateParams, apiKey).then(
      () => {
        return
      },
      error => {
        console.log(error)
        alert('오류가 발생했습니다.');
      },
    );
  };

  return [sendEmail];
};
