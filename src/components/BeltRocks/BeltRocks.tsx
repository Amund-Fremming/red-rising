import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { useReducedMotion } from '../../hooks/useOrbitTime';
import { BELT_SECTOR_DEGREES, beltRocks, Point } from '../../utils/orbit';
import { BELT_FRAME_RADIUS, beltRocksStyles as styles } from './beltRocksStyles';

const ROCKS = beltRocks();
const SECTOR_DURATION_MS = 150000;

type Props = {
  sun: Point;
};

export function BeltRocks({ sun }: Props) {
  const reduced = useReducedMotion();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (reduced) return;
    const loop = Animated.loop(Animated.timing(progress, { toValue: 1, duration: SECTOR_DURATION_MS, easing: Easing.linear, useNativeDriver: true }));
    loop.start();
    return () => loop.stop();
  }, [reduced, progress]);

  const rotate = progress.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `-${BELT_SECTOR_DEGREES}deg`] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.frame, { left: sun.x - BELT_FRAME_RADIUS, top: sun.y - BELT_FRAME_RADIUS, transform: [{ rotate }] }]}
    >
      {ROCKS.map((rock, index) => (
        <View
          key={index}
          style={[
            styles.rock,
            {
              left: BELT_FRAME_RADIUS + rock.x,
              top: BELT_FRAME_RADIUS + rock.y,
              width: rock.width,
              height: rock.height,
              opacity: rock.opacity,
              backgroundColor: rock.color,
              borderTopLeftRadius: rock.corners[0],
              borderTopRightRadius: rock.corners[1],
              borderBottomRightRadius: rock.corners[2],
              borderBottomLeftRadius: rock.corners[3],
              transform: [{ rotate: `${rock.rotation}deg` }],
            },
          ]}
        />
      ))}
    </Animated.View>
  );
}
