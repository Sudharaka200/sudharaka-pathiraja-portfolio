export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.2, 0.25, 0.25, 0.75],
            }
        }
    }
}

export const fadeDown = (delay = 0) => ({
    hidden : {
        opacity :0,
        y: -20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.5,
            ease: "easeOut",
        },
    },
});

export const zoomIn = (delay = 0 , duration = 0.5) => ({
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const pulse = {
    hidden: {
        scale: 1,
    },
    show: {
        scale: [1,1.05,1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    },
};

export const flipInX = (delay = 0, duration = 0.5) => ({
    hidden: {
        opacity: 0,
        rotateX: -90,
    },
    show: {
        opacity: 1,
        rotateX: 0,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const fadeInLeft = (delay = 0, duration = 0.6, distance = 50) => ({
    hidden: {
      opacity: 0,
      x: -distance,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

export const fadeInRight = (delay = 0, duration = 0.6, distance = 50) => ({
    hidden: {
        opacity: 0,
        x: distance,
    },
    show: {
        opacity : 1,
        x: 0,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        },
    },
});