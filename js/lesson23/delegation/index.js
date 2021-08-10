function generateLineSeats(count) {
	const lineSeats = [];

	for (let i = 1; i <= count; i++) {
		const lineSeat = document.createElement("div");
		lineSeat.classList.add("sector__seat");
		lineSeat.dataset.sectorSeatNum = i;
		lineSeats.push(lineSeat);
	}

	return lineSeats;
}

function generateSectorLines(count) {
	const sectorLines = [];

	for (let i = 1; i <= count; i++) {
		const sectorLine = document.createElement("div");
		sectorLine.classList.add("sector__line");
		sectorLine.dataset.sectorLineNum = i;

		const lineSeats = generateLineSeats(count);
		sectorLine.append(...lineSeats);

		sectorLines.push(sectorLine);
	}

	return sectorLines;
}

function generateSectors(count, size) {
	const sectors = [];

	for (let i = 1; i <= count; i++) {
		const sector = document.createElement("div");
		sector.classList.add("sector");
		sector.dataset.sectorNum = i;

		const sectorLines = generateSectorLines(size);
		sector.append(...sectorLines);

		sectors.push(sector);
	}

	return sectors;
}

const onSeatSelect = (event) => {
	const isSeat = event.target.classList.contains("sector__seat");

	if (!isSeat) {
		return;
	}

	const seat = event.target;

	const seatNum = seat.dataset.sectorSeatNum;
	const lineNum = seat.closest(".sector__line").dataset.sectorLineNum;
	const sectorNum = seat.closest(".sector").dataset.sectorNum;

	const selectionBoardElement = document.querySelector(".board__selected-seat");

	selectionBoardElement.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
};

function renderArena(sectorsCount, sectorSize) {
	const arena = document.querySelector(".arena");
	arena.addEventListener("click", onSeatSelect);

	const sectors = generateSectors(sectorsCount, sectorSize);
	arena.append(...sectors);
}

renderArena(3, 10);
