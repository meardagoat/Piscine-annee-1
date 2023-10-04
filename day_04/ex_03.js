function fillBus(peopleAtBusStops, busSeats) {
    let totalPeople = 0;

    for (let stop = 0; stop < peopleAtBusStops.length; stop++) {
        totalPeople += peopleAtBusStops[stop];

        if (totalPeople >= busSeats) {
            return stop;
        }
    }

    return -1;
}