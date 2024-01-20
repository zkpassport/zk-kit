import { NumericString } from "@zk-kit/groth16"

export type SnarkArtifacts = {
    wasmFilePath: string
    zkeyFilePath: string
}

export type EddsaProof = {
    commitment: NumericString
    nullifier: NumericString
    scope: NumericString
    proof: PackedProof
}

export type PackedProof = [
    NumericString,
    NumericString,
    NumericString,
    NumericString,
    NumericString,
    NumericString,
    NumericString,
    NumericString
]
