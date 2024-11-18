import { Router } from "express";
import {
  createPassword,
  deleteUserAccPass,
  getUserAccPasswords,
  updateUserPass,
} from "./controller/account.controller.js";
import {
  createAddress,
  getUserAddresses,
  deleteUserAddress,
  updateAddress,
} from "./controller/address.controller.js";

import {
  createCard,
  getUserCards,
  deleteCard,
  updateCard,
} from "./controller/bank.controller.js";
import {
  createNote,
  getUserNotes,
  deleteNote,
  updateNote,
} from "./controller/note.controller.js";

const router = Router();

router.post("/password/create", createPassword);
router.get("/password/:userId", getUserAccPasswords);
router.delete("/password/:id", deleteUserAccPass);
router.put("/password/:userId", updateUserPass);

router.post("/address/create", createAddress);
router.get("/address/:userId", getUserAddresses);
router.delete("/address/:id", deleteUserAddress);
router.put("/address/:userId", updateAddress);

router.post("/card/create", createCard);
router.get("/card/:userId", getUserCards);
router.delete("/card/:id", deleteCard);
router.put("/card/:userId", updateCard);

router.post("/note/create", createNote);
router.get("/note/:userId", getUserNotes);
router.delete("/note/:id", deleteNote);
router.put("/note/:userId", updateNote);

export default router;
