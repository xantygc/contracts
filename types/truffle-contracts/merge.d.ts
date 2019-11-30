/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />

import * as TruffleContracts from ".";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(
        name: "DoubleLinkedList"
      ): TruffleContracts.DoubleLinkedListContract;
      require(name: "Gas"): TruffleContracts.GasContract;
      require(name: "ICondition"): TruffleContracts.IConditionContract;
      require(name: "IStateMachine"): TruffleContracts.IStateMachineContract;
      require(name: "LinkedList"): TruffleContracts.LinkedListContract;
      require(
        name: "LinkedListAsArray"
      ): TruffleContracts.LinkedListAsArrayContract;
      require(name: "Migrations"): TruffleContracts.MigrationsContract;
      require(name: "RBAC"): TruffleContracts.RBACContract;
      require(name: "RBACExtended"): TruffleContracts.RBACExtendedContract;
      require(name: "StateMachine"): TruffleContracts.StateMachineContract;
      require(
        name: "StringConversion"
      ): TruffleContracts.StringConversionContract;
      require(name: "Transition"): TruffleContracts.TransitionContract;
    }
  }
}
