# Training the "Hey Saathi" wake word

Saathi listens for its name with [openWakeWord](https://github.com/dscripka/openWakeWord),
which runs on your Mac. The library ships models for a few English phrases but
not "Hey Saathi", so we train one. It takes about an hour in a free Google
Colab notebook and needs no recordings: the notebook makes thousands of
synthetic clips of the phrase with text-to-speech and trains a small model on them.

1. Open openWakeWord's automatic training notebook in Colab:
   `notebooks/automatic_model_training.ipynb` in the openWakeWord repository
   (the README links it as "train a custom model in Colab").
2. Runtime → Change runtime type → a GPU.
3. Set the target phrase. English text-to-speech reads "saathi" as "sath-ee",
   so spell it how it sounds: `hey saahthee`. Listen to the sample clip the
   notebook plays and adjust the spelling until it sounds right.
4. Run all cells. When it finishes, download the `.onnx` file.
5. Save it as `models/hey_saathi.onnx` in this project and restart Saathi.
   Settings → Listening → Wake word sensitivity tunes how easily it fires.

Until the model exists, Saathi says the wake word is unavailable and you can
talk with Space, ⌘J in the Mac app, or by tapping the orb.
