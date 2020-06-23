/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  exercise_instanceWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  exercise: { // root type
    id: number; // Int!
    label: string; // String!
    name: string; // String!
  }
  exercise_instance: { // root type
    duration?: number | null; // Float
    id: number; // Int!
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_session: { // root type
    id: number; // Int!
    note?: string | null; // String
    timestamp?: any | null; // DateTime
  }
  user: { // root type
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  exercise_instanceWhereUniqueInput: NexusGenInputs['exercise_instanceWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createExercise: NexusGenRootTypes['exercise']; // exercise!
    createExerciseInstance: NexusGenRootTypes['exercise_instance']; // exercise_instance!
    createExerciseSession: NexusGenRootTypes['exercise_session']; // exercise_session!
    signupUser: NexusGenRootTypes['user']; // user!
  }
  Query: { // field return type
    exerciseInstances: NexusGenRootTypes['exercise_instance'][]; // [exercise_instance!]!
    exercises: NexusGenRootTypes['exercise'][]; // [exercise!]!
    exerciseSessions: NexusGenRootTypes['exercise_session'][]; // [exercise_session!]!
    users: NexusGenRootTypes['user'][]; // [user!]!
  }
  exercise: { // field return type
    id: number; // Int!
    label: string; // String!
    name: string; // String!
  }
  exercise_instance: { // field return type
    duration: number | null; // Float
    exercise: NexusGenRootTypes['exercise']; // exercise!
    exercise_session: NexusGenRootTypes['exercise_session']; // exercise_session!
    id: number; // Int!
    repetitions: number | null; // Int
    weight: number | null; // Float
  }
  exercise_session: { // field return type
    exercise_instance: NexusGenRootTypes['exercise_instance'][]; // [exercise_instance!]!
    id: number; // Int!
    note: string | null; // String
    timestamp: any | null; // DateTime
    user: NexusGenRootTypes['user']; // user!
  }
  user: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createExercise: { // args
      label?: string | null; // String
      name?: string | null; // String
    }
    createExerciseInstance: { // args
      duration?: number | null; // Float
      exerciseId: number; // Int!
      repetitions?: number | null; // Int
      sessionId: number; // Int!
      weight?: number | null; // Float
    }
    createExerciseSession: { // args
      note?: string | null; // String
      userId: number; // Int!
    }
    signupUser: { // args
      email?: string | null; // String
      name?: string | null; // String
    }
  }
  exercise_session: {
    exercise_instance: { // args
      after?: NexusGenInputs['exercise_instanceWhereUniqueInput'] | null; // exercise_instanceWhereUniqueInput
      before?: NexusGenInputs['exercise_instanceWhereUniqueInput'] | null; // exercise_instanceWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "exercise" | "exercise_instance" | "exercise_session" | "user";

export type NexusGenInputNames = "exercise_instanceWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}