import  { Container } from 'unstated';

interface ParalaxOffset {
    x: number;
    y: number;
}

interface ParalaxSingletonState {
    paralaxLevels: number;
    paralaxOffset: ParalaxOffset[];
}

class ParalaxSingleton extends Container<ParalaxSingletonState> {
    state = {
        paralaxLevels: 3,
        paralaxOffset: [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}]
    }

    setOffsetLevel(level: number, offset: ParalaxOffset) {
        var currentParalaxOffset = this.state.paralaxOffset;
        currentParalaxOffset[level] = offset;
        this.setState({paralaxOffset: currentParalaxOffset});
    }

    setAllOffsetLevels(offsets: ParalaxOffset[]) {
        this.setState({paralaxLevels: offsets.length, paralaxOffset: offsets});
    }
}

export default ParalaxSingleton;