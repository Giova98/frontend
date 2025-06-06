import { motion } from 'framer-motion';

const AnimatedBackgroundSlider = ({ images, overlay = true }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatDelay: 1,
            delay: index * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      )}
    </div>
  );
};

export default AnimatedBackgroundSlider;