import { createLogger } from "../logger";

it("should log message", () => {
  const logger = createLogger("my logger");
  logger.log("my log");
  expect(logger.getLogs()).toEqual(["log - my logger - my log"]);
});

it("should log error", () => {
  const logger = createLogger("my logger");
  logger.error("my error");
  expect(logger.getLogs()).toEqual(["error - my logger - my error"]);
});
