import welcomeImg from 'components/ImageGallery/IdleView/welcome-img.png';

export default function IdleView() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <img
        src={welcomeImg}
        alt="welcome"
        width={800}
        style={{ margin: '0 auto' }}
      />
    </div>
  );
}
